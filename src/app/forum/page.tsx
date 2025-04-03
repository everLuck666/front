import PostList from '@/components/post-list';
import { getHost } from '@/env/env';

async function getPosts() {
  try {
    const response = await fetch(`http://${getHost()}:3000/api/getposts`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store' // 禁用请求缓存,
    });

    const result = await response?.json();
    const { data } = result || {};
    const { list } = data || {};

    if (list) return list;

    return [
      {
        id: '323',
        title: 'title',
        author: 'author',
        commentsCount: 3333,
      },
      {
        id: '32334',
        title: 'title',
        author: 'author',
        commentsCount: 3333,
      },
      {
        id: '324553',
        title: 'title',
        author: 'author',
        commentsCount: 3333,
      },
    ];
  } catch (error) {
    return [];
  }
}
export default async function FormPage() {
  const posts = await getPosts();

  return (
    <section className='w-[80%] mx-auto'>
      <PostList posts={posts} />
    </section>
  );
}
