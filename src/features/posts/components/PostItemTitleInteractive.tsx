'use client'

import { PATH } from '@/constants/path'
import { useRouter } from 'next/navigation'

type Props = {
  title: string
  slug: string
  onCloseModal: () => void
}

const PostItemTitleInteractive = ({ title, slug, onCloseModal }: Props) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`${PATH.POSTS}/${slug}`)
    setTimeout(() => onCloseModal(), 300) //TODO improve
  }

  return (
    <div onClick={onClick}>
      <h2 className={'text-red-700'}>{title}</h2>
    </div>
  )
}

export default PostItemTitleInteractive
