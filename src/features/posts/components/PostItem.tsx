import Link from 'next/link'

type Props = {
  title: string
  preview: string
  tags?: string[]
  slug: string
}
const PostItem = ({ title, preview, tags, slug }: Props) => {
  return (
    <li>
      <Link href={`/posts/${slug}`}>
        <h2 className={'text-red-700'}>{title}</h2>
      </Link>
      {tags?.map((tag) => {
        return (
          <span key={tag} className={'text-blue-500 pr-1'}>
            {tag}
          </span>
        )
      })}
      <p>{preview}</p>
    </li>
  )
}

export default PostItem
