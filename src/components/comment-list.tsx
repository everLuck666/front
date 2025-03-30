// components/CommentList.tsx
'use client'

import { useEffect, useState } from 'react'

interface Comment {
  userId: string
  content: string
  createdAt: string
  avatarUrl: string
}

export default function CommentList({ initialComments }: { initialComments: Comment[] }) {
  const [comments, setComments] = useState(initialComments)
  console.error('=========----CommentListeeeeee',comments, initialComments )

  useEffect(() => {
    const eventSource = new EventSource('/api/comments/stream')
    eventSource.onmessage = (e) => {
      setComments(prev => [JSON.parse(e.data), ...prev])
    }
    return () => eventSource.close()
  }, [])

  useEffect(() => {
    setComments(initialComments);  // 当 initialComments 变化时更新状态
  }, [initialComments]); 


  return (
    <div className="space-y-6">
      {comments.map(comment => (
        <div key={comment?.userId} className="flex items-start space-x-4">
          <img 
            src={comment.avatarUrl} 
            alt="用户头像"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{comment?.userId}</span>
              <span>•</span>
              <time>{comment.createdAt}</time>
            </div>
            <p className="mt-1 text-gray-800">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}