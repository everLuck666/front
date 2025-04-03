// components/CommentList.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Comment {
  userId: string;
  content: string;
  createdAt: string;
  avatarUrl: string;
}

export default function CommentList({
  initialComments,
}: {
  initialComments: Comment[];
}) {
  const [comments, setComments] = useState(initialComments);

  useEffect(() => {
    setComments(initialComments);
    // 当 initialComments 变化时更新状态
  }, [initialComments]);

  return (
    <div className='space-y-6'>
      {comments.map((comment) => (
        <div className='flex items-start space-x-4'>
          {/* <img 
            src={comment.avatarUrl} 
            alt="用户头像"
            className="w-10 h-10 rounded-full object-cover"
          /> */}
          <Image
            src={comment.avatarUrl}
            alt='Next.js logo'
            width={38}
            height={38}
            className='!size-[38px] rounded-sm ml-2' // Tailwind 强制尺寸
            priority
            // 添加以下属性（Next.js 13+）
            // unoptimized={true} // 如果图片服务器不支持优化，强制直接加载
          />

          <div className='flex-1'>
            <div className='flex items-center space-x-2 text-sm text-gray-500'>
              <span>{comment?.userId}</span>
              <span>•</span>
              <time>{comment.createdAt}</time>
            </div>
            <p className='mt-1 text-gray-800'>{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
