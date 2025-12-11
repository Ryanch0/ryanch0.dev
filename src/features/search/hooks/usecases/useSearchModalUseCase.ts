import { useEffect, useState } from 'react'

import { PATH } from '@/constants/path'
import { PostListItem } from '@/external/types/post/response'
import useDebounce from '@/features/search/hooks/useDebounce'
import useFetchSearchedPosts from '@/features/search/hooks/useFetchSearchedPosts'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

type UseSearchModalReturn = {
  search: string
  posts: PostListItem[]
  loading: boolean
  error: Error | null
  onChange: (val: string) => void
  onCloseModal: () => void
  onSelect: (val: string) => void
  locale: string
}

const useSearchModalUseCase = ({
  onClose,
  isOpen
}: {
  onClose: () => void
  isOpen: boolean
}): UseSearchModalReturn => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 200)
  const pathname = usePathname()
  const { push } = useRouter()

  const { posts, loading, error } = useFetchSearchedPosts({
    search: debouncedSearch
  })
  const locale = useLocale()

  const onChange = (val: string) => {
    setSearch(val)
  }
  const onCloseModal = () => {
    setSearch('')
    onClose()
  }

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      onCloseModal()
    }
  }, [pathname])

  const onSelect = (slug: string) => {
    const target = `${PATH.POSTS}/${slug}`

    if (pathname === target) {
      return onCloseModal()
    }

    return push(target)
  }

  return {
    search,
    posts,
    loading,
    error,
    onChange,
    onCloseModal,
    onSelect,
    locale
  }
}

export default useSearchModalUseCase
