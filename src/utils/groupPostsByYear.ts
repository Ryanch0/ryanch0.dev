import { PostListItem } from '@/external/types/post/response'

const groupPostsByYear = (
  posts: PostListItem[]
): Record<string, PostListItem[]> => {
  return posts.reduce(
    (acc, post) => {
      const year = new Date(post.date).getFullYear().toString()

      if (!acc[year]) {
        acc[year] = []
      }

      acc[year].push(post)

      return acc
    },
    {} as Record<string, PostListItem[]>
  )
}

export default groupPostsByYear
