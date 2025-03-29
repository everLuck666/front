// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Metadata, status } from '@grpc/grpc-js';
import { getCommentRpc } from '@/lib/commentrpc';
import { commentrpc } from '@/stubs/commentrpc';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    // 1. 初始化 gRPC 客户端
    const client = getCommentRpc()

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
    // 在现有代码的元数据设置前添加：
    const resultString = (await cookies()).get('session')?.value || ''; // 获取服务器端 Cookie
    const result = JSON.parse(resultString);
    console.error("*****************8", result?.token)
    metadata.add('authorization', `Bearer ${result?.token}`); // 注入认证头
    metadata.add('trace-id', 'request_123');

    // 等待通道就绪
    await new Promise((resolve, reject) => {
      client.waitForReady(Date.now() + 5000, (err) => {
        console.error('我是事发啊啊啊', err);
        err ? reject(err) : resolve(true);
      });
    });

    // 构造请求对象
    const grpcRequest = new commentrpc.CreatePostReq();
    grpcRequest.title = body.title;
    grpcRequest.content = body.content;

    // 其他字段设置...

    // 执行调用（添加元数据）
    const response = await new Promise<any>((resolve, reject) => {
      client.CreatePost(grpcRequest, metadata, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });


    const { postId } = response?.toObject() || {};

    if (postId) {
      return NextResponse.json(
        {
          code: 200,
          message: '创建帖子成功',
          redirectTo: '/forum', // 跳转目标路径
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
