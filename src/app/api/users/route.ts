// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { myuserrpc } from '../../../stubs/myuserrpc';
import { ChannelCredentials, Metadata, status } from '@grpc/grpc-js';

export async function POST(request: NextRequest) {
  try {
    // 1. 初始化 gRPC 客户端
    const client = new myuserrpc.MyuserrpcClient(
      'localhost:9899',
      ChannelCredentials.createInsecure(),
    );

    // 2. 等待通道就绪（5秒超时）
    await new Promise((resolve, reject) => {
      client.waitForReady(Date.now() + 5000, (err) =>
        err ? reject(err) : resolve(true),
      );
    });

    // 3. 解析请求体
    const body = await request.json();

    // 5. 执行 RPC 调用（添加元数据）
    const metadata = new Metadata();
    metadata.add('trace-id', 'request_123');

    // 等待通道就绪
    await new Promise((resolve, reject) => {
      client.waitForReady(Date.now() + 5000, (err) => {
        err ? reject(err) : resolve(true);
      });
    });

    // 构造请求对象
    const grpcRequest = new myuserrpc.AddUserRequest();
    grpcRequest.username = body.username;
    grpcRequest.password = body.password;
    grpcRequest.avatarUrl = body.avatarUrl;
    grpcRequest.email = body.email;

    // 其他字段设置...

    // 执行调用（添加元数据）
    const response = await new Promise<any>((resolve, reject) => {
      client.AddUser(grpcRequest, metadata, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    const { code } = response?.toObject() || {};

    if (code === 200) {
      return NextResponse.json(
        {
          code: 200,
          message: '用户创建成功',
          redirectTo: '/login', // 跳转目标路径
        },
        {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    } else {
      return NextResponse.json(
        {
          error: '系统注册错误',
          code,
        },
        { status: 400 },
      );
    }
  } catch (error: any) {
    console.error('gRPC 调用失败:', error);

    // 7. 错误分类处理
    let statusCode = 500;
    if (error.code === status.UNAVAILABLE) {
      statusCode = 503; // 服务不可用
    } else if (error.code === status.INVALID_ARGUMENT) {
      statusCode = 400; // 参数错误
    }

    return NextResponse.json(
      {
        error: error.details || '系统错误',
        code: error.code,
      },
      { status: statusCode },
    );
  }
}
