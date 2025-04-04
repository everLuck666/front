'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Editor } from '@/components/tiptap-editor';
import { postSchema } from '@/lib/schemas';

export default function PostPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(postSchema)
  });

  // 富文本内容更新处理
  const handleContentChange = (content: string) => {
    setValue('content', content);
  };

  // 表单提交逻辑
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        cache: 'no-store' // 禁用请求缓存,
      });

      const result = await response.json();

      console.error('dududdu', result)
      
      if (result?.code === 200) {
        router.push(result.redirectTo);
      } else {
        router.push(result.redirectTo);
      }
    } catch (error) {
      console.error('提交失败:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-black">发布新话题</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-black">标题</label>
          <input
            {...register('title')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="请输入话题标题"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-black">标签</label>
          <input
            {...register('tag')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="请输入标签"
          />
          {errors.tag && (
            <p className="text-red-500 text-sm mt-1">{errors.tag.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-black">内容</label>
          <Editor 
            onContentChange={handleContentChange} 
            className="min-h-[300px]"
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-black"
        >
          立即发布
        </button>
      </form>
    </div>
  );
}