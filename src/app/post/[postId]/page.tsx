import Image from 'next/image';

interface Props {
  params: { postId: string }; // 自动捕获动态参数[1,2](@ref)
}

export async function getPostById(postId: string) {
  const response = await fetch(
    `http://localhost:3000/api/getpostbyid?postid=${postId}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const result = await response.json();

  // return result?.data?.list;

  const { data } = result || {};
  const { list } = data || {};

  console.error('daataddd', result);

  if (result?.code === 200) {
    return result?.data;
  }

  return {};
  // const posts = await prisma.post.findMany({
  //   include: {
  //     author: true,
  //     _count: { select: { comments: true } }
  //   }
  // });

  // return posts.map(post => ({
  //   id: post.id,
  //   title: post.title,
  //   author: post.author.name,
  //   commentsCount: post._count.comments
  // }));
}
export default async function PostDetail({ params }: Props) {
  // 根据 postId 调用 API 获取详情数据

  //  const posts = await getPosts();
  const { postId } = await params;
  const result = await getPostById(postId);

  return (
    <div className='w-[80%] mx-auto bg-white pl-2 pr-2 pt-2 pb-2'>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className=' text-black font-bold text-[20px] font-semibold'>{result?.title}</div>
          <Image
            src={result?.avatarUrl}
            alt='Next.js logo'
            width={38}
            height={38}
            className='!size-[60px] rounded-sm ml-2' // Tailwind 强制尺寸
            priority
          />
      </div>
      <hr className="my-4 border-t" />
      <div className='text-black text-[20px] text-base'>{result?.content}</div>
    </div>
  );
}
