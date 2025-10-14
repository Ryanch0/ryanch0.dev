import PostItem from '@/features/posts/components/PostItem'
import { getAllPosts } from '@/lib/queries/posts'

const PostList = async () => {
  const data = await getAllPosts()

  return (
    <ul>
      {data.map((post) => {
        return (
          <PostItem
            key={post.id}
            title={post.title}
            preview={post.preview}
            tags={post.tags}
            slug={post.slug}
          />
        )
      })}
    </ul>
  )
}

export default PostList
