// src/features/auth/session.ts
'use server';
import { cookies } from 'next/headers';

export async function createSession(user: { token: string; refreshToken: string}) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  (await cookies()).set('session', JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires,
    path: '/',
  });
}

export async function deleteSession() {
  (await cookies()).delete('session');
}