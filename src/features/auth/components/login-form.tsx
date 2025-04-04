// src/features/auth/components/login-form.tsx
'use client';
// import { useFormState } from 'react-dom';
import { useActionState } from 'react';
import { authenticate } from '@/features/auth/actions';

export default function LoginForm() {
  const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          用户名称
        </label>
        <input
          name="username"
          type="username"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          密码
        </label>
        <input
          name="password"
          type="password"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
        />
      </div>

      {/* {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )} */}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        登录
      </button>
    </form>
  );
}