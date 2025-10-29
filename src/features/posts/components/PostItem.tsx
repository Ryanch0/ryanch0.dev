import { ReactNode } from 'react'

import { PATH } from '@/constants/path'
import groupHoverStyles from '@/features/posts/utils/groupHoverStyles'
import { getDateParts } from '@/utils/date'
import Link from 'next/link'

type Props = {
  preview: string
  title: ReactNode
  slug: string
  date: string
}
const PostItem = ({ title, slug, date }: Props) => {
  const { day, month } = getDateParts(date)

  return (
    <li
      className={
        'group/post [:has(section:hover)_*]:text-base-light/50 dark:[:has(section:hover)_*]:text-base-dark/50 block not-first:py-4'
      }
    >
      <Link href={`${PATH.POSTS}/${slug}`} className={'rounded-lg'}>
        <div className={`w-full ${groupHoverStyles.post}`}>
          <div className={'flex items-center justify-between'}>
            <h4 className={'mt-1 text-lg'}>
              <span>{title}</span>
            </h4>
            <time>{`${month}. ${day}.`}</time>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostItem
