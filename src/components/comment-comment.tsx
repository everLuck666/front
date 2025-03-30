'use client';

import CommentList from '@/components/comment-list';
import NewCommentForm from '@/components/comments-form';
import { getHost } from '@/env/env';
import { useEffect, useState } from 'react';

interface CommentSectionProps {
  fatherId: string;
}
export default function CommentSection({ fatherId }: CommentSectionProps) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // 从 API 获取初始评论数据
    tryToFetchData();
  }, []);

  const tryToFetchData = async () => {
    const comments = await fetch(
      `http://${getHost()}:3000/api/getcomments-bypostid?postid=${fatherId}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    ).then((res) => res.json());

    if (comments?.code === 200) {
      setComments(comments?.data)
    }
  };

  return (
    <section className='w-[80%] mx-auto p-6 bg-white rounded-lg shadow-md'>
      <NewCommentForm fatherId={fatherId} tryToFetchData={tryToFetchData}/>
      <CommentList initialComments={comments} />
    </section>
  );
}
