// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Metadata, status } from '@grpc/grpc-js';
import { getCommentRpc } from '@/lib/commentrpc';
import { commentrpc } from '@/stubs/commentrpc';
import { cookies } from 'next/headers';
import { refreshAuth } from '@/features/auth/actions';

export async function POST(request: NextRequest) {
  try {
    const clonedReq = request.clone(); // 克隆请求体
    // 1. 初始化 gRPC 客户端
    const client = getCommentRpc();

    // 5. 执行 RPC 调用（添加元数据）
    const metadata = new Metadata();
    // 在现有代码的元数据设置前添加：
    metadata.add('trace-id', 'request_123');

    const resultString = (await cookies()).get('session')?.value || ''; // 获取服务器端 Cookie
    if (!resultString) {
      return NextResponse.json(
        {
          error: '系统错误',
          redirectTo: '/login', // 跳转目标路径
        },
        { status: 400 },
      );
    }

    const result = JSON.parse(resultString);
    metadata.add('refreshToken', result?.refreshToken);
    console.error('*****************8', result?.token);
    metadata.add('authorization', `Bearer ${result?.token}`); // 注入认证头

    // 等待通道就绪
    await new Promise((resolve, reject) => {
      client.waitForReady(Date.now() + 5000, (err) => {
        console.error('我是事发啊啊啊', err);
        err ? reject(err) : resolve(true);
      });
    });

    // 3. 解析请求体
    const body = await clonedReq.json();

    // 构造请求对象
    const grpcRequest = new commentrpc.AddCommentsReq();
    grpcRequest.content = body?.content;
    grpcRequest.fatherId = body?.postid;

    // 其他字段设置...

    try {
      // 执行调用（添加元数据）
      const response = await new Promise<any>((resolve, reject) => {
        client.AddComments(grpcRequest, metadata, (err, res) => {
          console.error('看看结果000000000', err);
          err ? reject(err) : resolve(res);
        });
      });

      console.error('看看结果', response.code, response?.toObject());

      const { postId: myPostId } = response?.toObject() || {};

      if (myPostId) {
        return NextResponse.json(
          {
            code: 200,
            message: '获取帖子成功',
            data: myPostId,
          },
          {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          },
        );
      } else {
        return NextResponse.json(
          {
            error: '系统错误',
          },
          { status: 400 },
        );
      }
    } catch (error: any) {
      // 解析 gRPC 错误元数据
      const statusCode = error?.code; // gRPC 错误码（数值）
      const statusMessage = error?.details; // 错误描述文本
      const metadata = error?.metadata; // 完整的元数据对象

      // 判断错误类型
      if (statusCode === 16) {
        if (statusMessage.includes('missing metadata')) {
          // 处理缺失 Metadata 的认证错误
          // redirectToLogin();
          console.error('refreshAuth=====99988877766666')
          await refreshAuth();
          return POST(request)
        } else if (statusMessage.includes('invalid token')) {
          // 处理 Token 失效错误
          // refreshTokenAndRetry();
          return NextResponse.json(
            {
              error: error.details || '系统错误',
              code: error.code,
            },
            { status: statusCode },
          );
        }
      }
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
