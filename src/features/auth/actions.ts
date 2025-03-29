// src/features/auth/actions.ts
'use server';
import { getAuthRpc } from '@/lib/authrpc';
import { createSession, deleteSession } from './session';
import { redirect } from 'next/navigation';
import { Metadata } from '@grpc/grpc-js';
import { authserve } from '@/stubs/authserve';

export async function authenticate(prevState: any, formData: FormData) {
  const username = formData.get('username')?.toString();
  const password = formData.get('password')?.toString();
  const client = getAuthRpc();

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
  const grpcRequest = new authserve.LoginReq();
  grpcRequest.username = username || '';
  grpcRequest.password = password || '';

  // 其他字段设置...

  // 执行调用（添加元数据）
  const response = await new Promise<any>((resolve, reject) => {
    client.GenerateToken(grpcRequest, metadata, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });

  const { token } = response?.toObject() || {};

  // 示例验证逻辑（需替换为实际用户验证）
  if (token) {
    await createSession({ token });
    return redirect('/forum');
  }

  return { message: '用户名称或密码错误' };
}
