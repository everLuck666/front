// components/NewCommentForm.tsx
'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation';

interface NewCommentFormProps {
  fatherId: string;
  tryToFetchData: Function;
}

export default function NewCommentForm({
  fatherId,
  tryToFetchData,
}: NewCommentFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: contentRef.current?.value,
          postid: fatherId,
        })
      })

      const result = await response.json();

      if (response.ok) {
        contentRef.current!.value = ''
        tryToFetchData?.();
        // window.location.reload() // 刷新评论列表
      } else {
        router.push(result.redirectTo);
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <textarea
        ref={contentRef}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="写下你的评论..."
        rows={3}
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? '提交中...' : '发表评论'}
      </button>
    </form>
  )
}