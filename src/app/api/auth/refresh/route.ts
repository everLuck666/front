// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { authserve } from '../../../../stubs/authserve';
import { ChannelCredentials, Metadata, status } from '@grpc/grpc-js';
import { getAuthRpcClient } from '@/lib/authrpc';

export async function POST(request: NextRequest) {
  try {
    // 1. 初始化 gRPC 客户端
    const client = await getAuthRpcClient()
    // 3. 解析请求体
    const body = await request.json();

    // 5. 执行 RPC 调用（添加元数据）
    const metadata = new Metadata();
    metadata.add('trace-id', 'request_123');


    // 构造请求对象
    const grpcRequest = new authserve.RefreshRequest();
    grpcRequest.refresh_token = body.refresh_token;

    // 执行调用（添加元数据）
    const response = await new Promise<any>((resolve, reject) => {
      client.RefreshToken(grpcRequest, metadata, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    const { refresh_token: refreshToken, access_token: accessToken } = response?.toObject() || {};

    if (refreshToken || accessToken) {
      return NextResponse.json(
        {
          code: 200,
          message: '刷新成功',
          data: {
            refreshToken,
            accessToken,
          }
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
