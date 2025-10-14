import PostDetail from '@/features/posts/components/PostDetail'
import { getPostBySlug } from '@/lib/queries/posts'
import Hero from '@/shared/components/Hero'
import { formatLongDate } from '@/utils/date'
import { Metadata } from 'next'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

type Props = {
  params: Promise<NextParsedUrlQuery>
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { slug } = await params

  if (!slug || typeof slug !== 'string') {
    redirect('/')
  }

  const data = await getPostBySlug(slug)

  return {
    description: data?.meta_description
  }
}

const Page = async ({ params }: Props) => {
  const { slug } = await params

  if (!slug || typeof slug !== 'string') {
    redirect('/')
  }

  const data = await getPostBySlug(slug)

  if (!data) {
    notFound()
  }

  return (
    <>
      <Hero>
        <h1>{data.title}</h1>
        <p>Published {formatLongDate(data.date)}</p>
        {data.last_modified && (
          <p>Last updated {formatLongDate(data.last_modified)}</p>
        )}
        <Link href={`/write/${data.id}`}>Update</Link>
        <form action="">
          <button type="submit">Delete</button>
        </form>

        <p>Tags: {data.tags}</p>
      </Hero>
      <PostDetail content={data.content} />
    </>
  )
}

export default Page
