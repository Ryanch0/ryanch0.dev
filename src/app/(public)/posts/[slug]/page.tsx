import { MOCK_POST_DETAIL } from '@/constants/mock'
import PostDetail from '@/features/posts/components/PostDetail'
import Hero from '@/shared/components/Hero'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'
import Link from 'next/link'

type Props = {
  params: NextParsedUrlQuery
}
const Page = ({ params }: Props) => {
  const { slug } = params
  const { id, title, date, last_modified } = MOCK_POST_DETAIL //TODO from db

  return (
    <>
      <Hero>
        <p>{slug}</p>
        <h1>{title}</h1>
        <p>Published {date}</p>
        <p>Last updated {last_modified}</p>
        <Link href={`/write/${id}`}>Update</Link>
        <form action="">
          <button type="submit">Delete</button>
        </form>
      </Hero>
      <PostDetail />
    </>
  )
}

export default Page
