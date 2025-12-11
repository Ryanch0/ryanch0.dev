import { useEffect, useState } from 'react'

import { findPostsBySearch } from '@/external/repository/posts-client'
import { PostListItem } from '@/external/types/post/response'

type Props = {
  search: string
}

const useFetchSearchedPosts = ({ search }: Props) => {
  const [posts, setPosts] = useState<PostListItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | Error>(null)

  useEffect(() => {
    const fetchSearchedPosts = async () => {
      if (!search) return setPosts([])

      try {
        setLoading(true)

        const data = await findPostsBySearch(search)
        setPosts(data)
      } catch (e) {
        if (e instanceof Error) {
          setError(e)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchSearchedPosts()
  }, [search, setLoading, setPosts])

  return { posts, loading, error }
}

export default useFetchSearchedPosts
