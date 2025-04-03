// src/features/auth/actions.ts
'use server';
import { getAuthRpc } from '@/lib/authrpc';
import { createSession, deleteSession } from './session';
import { redirect } from 'next/navigation';
import { Metadata } from '@grpc/grpc-js';
import { authserve } from '@/stubs/authserve';
import { cookies } from 'next/headers';
import { getHost } from '@/env/env';

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

  console.error('dududududdudu', response?.toObject())

  const { token, refreshToken } = response?.toObject() || {};

  // 示例验证逻辑（需替换为实际用户验证）
  if (token) {
    await createSession({ token, refreshToken });
    return redirect('/forum');
  }

  return { message: '用户名称或密码错误' };
}

export async function refreshAuth() {
  try {
    const resultString = (await cookies()).get('session')?.value || ''; // 获取服务器端 Cookie
    const result = JSON.parse(resultString);
    const refreshTokenString = result?.refreshToken;

    const response = await fetch(
      `http://${getHost()}:3000/api/auth/refresh`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refresh_token: refreshTokenString
        }),
        cache: 'no-store' // 禁用请求缓存,
      },
    );

    const data = await response.json();
    const { refreshToken, accessToken } = data?.data || {};
    await createSession({ token: accessToken, refreshToken: refreshToken });
  } catch (error) {
    console.error('refreshAuth error', error)
    
  }
    
}