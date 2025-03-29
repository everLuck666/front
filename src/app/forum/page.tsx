import PostList from "@/components/post-list";


export async function getPosts() {

  const response = await fetch('http://localhost:3000/api/getposts', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  
  const result = await response.json();

  // return result?.data?.list;

  const { data } = result || {};
  const { list } = data || {};
  console.error('================----ee------', list)

  if (list) return list;

  // console.error('===========getPosts', result)

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

    return [{
        id: "323",
        title: "title",
        author: "author",
        commentsCount: 3333
    }, {
        id: "32334",
        title: "title",
        author: "author",
        commentsCount: 3333
    },
    {
        id: "324553",
        title: "title",
        author: "author",
        commentsCount: 3333
    }]
  }
export default async function FormPage() {
    const posts = await getPosts();
    console.error('FormPage====', posts)


    return (
        <section className="w-[80%] mx-auto">
          <PostList posts={posts} />
        </section>
      );
}