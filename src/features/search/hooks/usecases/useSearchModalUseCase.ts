import { useState } from 'react'

import useDebounce from '@/features/search/hooks/useDebounce'
import useFetchSearchedPosts from '@/features/search/hooks/useFetchSearchedPosts'

const useSearchModalUseCase = ({ onClose }: { onClose: () => void }) => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  const { posts, loading } = useFetchSearchedPosts({ search: debouncedSearch })

  const onChange = (val: string) => {
    setSearch(val)
  }
  const onCloseModal = () => {
    setSearch('')
    onClose()
  }

  return { search, posts, loading, onChange, onCloseModal }
}

export default useSearchModalUseCase
