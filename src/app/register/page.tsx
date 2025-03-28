// app/register/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  username: z
    .string()
    .min(12, '学号必须12位')
    .max(12, '学号必须12位')
    .regex(/^\d{12}$/, '必须是纯数字学号'),
  password: z
    .string()
    .min(8, '密码至少8位')
    .regex(/[A-Z]/, '必须包含大写字母')
    .regex(/[0-9]/, '必须包含数字'),
  email: z.string().email('无效邮箱格式'),
  avatarUrl: z.string().url('头像链接不合法').optional(),
});

type FormValues = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  // 在useForm下方新增状态管理
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue, // 新增解构
    formState: { errors },
  } = useForm<FormValues>({
    // resolver: zodResolver(schema),
  });

  // 文件选择处理函数
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setUploading(true);
        // 生成预览图
        const preview = URL.createObjectURL(file);
        setPreviewUrl(preview);

        // 上传到服务器
        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', '3333');
        const res = await fetch('http://43.139.247.92:9898/upload', {
          method: 'POST',
          body: formData,
        });
        const result = await res.json();

        if (result?.code === 200) {
           // 更新表单字段
          setValue('avatarUrl', result?.data); // 设置到 hidden input
          setPreviewUrl(result?.data); // 更新表单字段
        }
      } catch (error) {
        alert('头像上传失败');
      } finally {
        setUploading(false);
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.redirectTo) {
        router.push(result.redirectTo); // 执行跳转[5](@ref)
      } else {
        // 处理其他响应
        alert('异常')
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6 text-black'>用户注册</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* 用户名输入 */}
        <div>
          <label className='block text-sm font-medium text-black'>学号</label>
          <input
            {...register('username')}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black'
          />
          {errors.username && (
            <p className='text-red-500 text-sm'>{errors.username.message}</p>
          )}
        </div>

        {/* 密码输入 */}
        <div>
          <label className='block text-sm font-medium text-black'>密码</label>
          <input
            type='password'
            {...register('password')}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black'
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}
        </div>

        {/* 邮箱输入 */}
        <div>
          <label className='block text-sm font-medium text-black'>
            电子邮箱
          </label>
          <input
            type='email'
            {...register('email')}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>

        {/* 头像URL输入 */}
        <div>
          <label className='block text-sm font-medium text-black'>
            上传头像
          </label>
          <input
            type='file'
            accept='image/*'
            onChange={handleFileUpload}
            disabled={uploading}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt='头像预览'
              className='mt-2 h-20 w-20 rounded-full object-cover'
            />
          )}
          <input type='hidden' {...register('avatarUrl')} />
          {errors.avatarUrl && (
            <p className='text-red-500 text-sm'>{errors.avatarUrl.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'
        >
          立即注册
        </button>
      </form>
    </div>
  );
}
