import Image from 'next/image';
import CommentSection from '@/components/comment-comment'
import PageProps from "next/app"
import { getHost } from '@/env/env';

interface Props extends PageProps{
  params: { postId: string }; // 自动捕获动态参数[1,2](@ref)
}

async function getPostById(postId: string) {
  const response = await fetch(
    `http://${getHost()}:3000/api/getpostbyid?postid=${postId}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const result = await response.json();
  const { data } = result || {};

  console.error('daataddd', result);
  if (result?.code === 200) {
    return result?.data;
  }

  return {};
}
export default async function PostDetail({ params }: any) {
  // 根据 postId 调用 API 获取详情数据
  //  const posts = await getPosts();
  const { postId } = await params;
  const result = await getPostById(postId);

  return (
    <div>
      <div className='w-[80%] mx-auto bg-white pl-2 pr-2 pt-2 pb-2'>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className=' text-black font-bold text-[20px] font-semibold'>
            {result?.title}
          </div>
          <Image
            src={result?.avatarUrl}
            alt='Next.js logo'
            width={38}
            height={38}
            className='!size-[60px] rounded-sm ml-2' // Tailwind 强制尺寸
            priority
          />
        </div>
        <div className='flex flex-row items-center'>
          <div className='text-[rgb(121,128,134)]'>{result?.userId}</div>
          <div className='w-1 h-1 rounded-full bg-[rgb(204,204,204)] ml-1 mr-1'></div>
          <div className='text-[rgb(121,128,134)]'>{result?.createdAt}</div>
        </div>
        <hr className='my-4 border-t' />
        <div className='text-black text-[20px] text-base'>
          {result?.content}
        </div>
      </div>

      <div className=' mt-6'>
      <CommentSection fatherId={postId}/>
      </div>
    </div>
  );
}
