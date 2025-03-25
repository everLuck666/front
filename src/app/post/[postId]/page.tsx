interface Props {
    params: { postId: string }; // 自动捕获动态参数[1,2](@ref)
  }
  
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
  export default async function PostDetail({ params }: Props) {
    // 根据 postId 调用 API 获取详情数据

    //  const posts = await getPosts();
    const { postId } = await params
    return (
      <div>

        rrrrrrrrrrrrrrrrrrrrereerere

        rrrrrr
        <h1>帖子 ID：{postId}</h1>
        {/* 具体详情内容渲染 */}
      </div>
    );
  }