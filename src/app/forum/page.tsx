import PostList from "@/components/post-list";


export async function getPosts() {
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


    return (
        <section className="py-8 w-[80%] mx-auto mt-4">
          <PostList posts={posts} />
        </section>
      );
}