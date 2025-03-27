// src/features/auth/actions.ts
'use server';
import { createSession, deleteSession } from './session';
import { redirect } from 'next/navigation';

export async function authenticate(prevState: any, formData: FormData) {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  // 示例验证逻辑（需替换为实际用户验证）
  if (email === 'admin@example.com' && password === '123456') {
    await createSession({ userId: '1', email: email });
    return redirect('/dashboard');
  }
  
  return { message: '邮箱或密码错误' };
}