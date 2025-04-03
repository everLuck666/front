import Image from 'next/image';
// 新增导入
import Link from 'next/link';
import Tag from './tag';

interface Post {
  id: string;
  title: string;
  author: string;
  commentsCount: number;
  userId: string;
  avatarUrl: string;
  createdAt: string;
  tag: string;
}

// 15

export default function PostList({ posts }: { posts: Post[] }) {
  console.error('PostList===posts', posts);
  return (
    <div className='md:mt-20 bg-white'>
      {posts.map((post) => (
        <Link
          key={post.id}
          scroll={false}
          href={`/post/${post.id}`} // 动态路径[2,3](@ref)
          className='block hover:bg-gray-50 cursor-pointer'
        >
          <article
            key={post.id}
            className='bg-white flex flex-row pt-2 pb-2 items-center pr-2'
            style={{ borderBottom: '1px solid rgb(226,226,226)' }}
          >
            <Image
              src={post.avatarUrl}
              alt='Next.js logo'
              width={38}
              height={38}
              className='!size-[38px] rounded-sm ml-2' // Tailwind 强制尺寸
              priority
              // 添加以下属性（Next.js 13+）
              // unoptimized={true} // 如果图片服务器不支持优化，强制直接加载
            />
            <div className='ml-2'>
              <label
                className='text-[14px] font-semibold text-[rgb(121,128,134)] 
                 hover:text-[rgb(78,82,86)]
                  hover:underline
                   hover:underline-offset-4
                     hover:decoration-2'
              >
                {post.title}
              </label>
              <div className='mt-2 text-sm text-gray-500 flex flex-row items-center'>
                <Tag
                  text={post.tag || '默认'}
                  bgColor='bg-[rgb(245,245,245)]'
                  textColor='text-[rgb(153,153,153)]'
                  hoverTextColor='hover:text-[#777777]'
                  size='xs'
                  hoverBgColor='hover:bg-[rgb(226,226,226)]'
                  rounded='md'
                />
                <div className='w-1 h-1 rounded-full bg-[rgb(204,204,204)] ml-1 mr-1'></div>
                <span className='text-[rgb(121,128,134)] font-[600]'>
                  {post.userId}
                </span>
                <div className='w-1 h-1 rounded-full bg-[rgb(204,204,204)] ml-1 mr-1'></div>
                <span className='ml-1'>{post.createdAt}</span>
                <span className='ml-4'>{post.commentsCount} 条评论</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
