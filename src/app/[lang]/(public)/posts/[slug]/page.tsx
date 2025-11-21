import { Suspense } from 'react'

import { findPostBySlug } from '@/external/repository/posts-server'
import PostContent from '@/features/posts/components/PostContent'
import PostNavigationWrapper from '@/features/posts/components/PostNavigationWrapper'
import PostContentSkeleton from '@/features/posts/components/skeleton/PostContentSkeleton'
import PostNavigationSkeleton from '@/features/posts/components/skeleton/PostNavigationSkeleton'
import { createMetadata } from '@/lib/metadata'
import Footer from '@/shared/components/Footer'
import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { slug } = await params

  const data = await findPostBySlug(slug)

  return createMetadata({
    title: data.title,
    description: data.subtitle,
    ogDescription: data.subtitle,
    url: `/posts/${slug}`
  })
}

const Page = async ({ params }: Props) => {
  const { slug } = await params
  const locale = await getLocale()

  return (
    <div className={'flex flex-col pt-6 sm:pt-18'}>
      <Suspense fallback={<PostContentSkeleton />}>
        <PostContent slug={slug} locale={locale} />
      </Suspense>
      <Suspense fallback={<PostNavigationSkeleton />}>
        <PostNavigationWrapper slug={slug} locale={locale} />
      </Suspense>
      <Footer />
    </div>
  )
}

export default Page
