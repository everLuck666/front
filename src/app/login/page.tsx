// src/app/login/page.tsx
import LoginForm from '@/features/auth/components/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          欢迎登录rrrr
        </h1>
        <LoginForm />
        
        <div className="mt-6 text-center">
          <a 
            href="/forgot-password" 
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            忘记密码？
          </a>
        </div>
      </div>
    </div>
  );
}