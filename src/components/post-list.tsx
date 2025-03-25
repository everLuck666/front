import Image from 'next/image';
// 新增导入
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  author: string;
  commentsCount: number;
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className='md:mt-15 bg-white'>
      {posts.map((post) => (
        <Link 
        key={post.id} 
        href={`/post/${post.id}`}  // 动态路径[2,3](@ref)
        className='block hover:bg-gray-50 cursor-pointer'
      >
        <article key={post.id} className='bg-white flex flex-row pt-2 pb-2' style={{borderBottom: "1px solid rgb(226,226,226)"}}>
          <Image
            src='https://img0.baidu.com/it/u=2191392668,814349101&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1399'
            alt='Next.js logo'
            width={38}
            height={38}
            priority
          />
          <div className='ml-2'>
            <h3 className='text-xl font-semibold text-gray-500'>
              {post.title}
            </h3>
            <div className='mt-2 text-sm text-gray-500'>
              <span>{post.author}</span>
              <span className='ml-4'>{post.commentsCount} 条评论</span>
            </div>
          </div>
        </article>
        </Link>
      ))}
    </div>
  );
}
