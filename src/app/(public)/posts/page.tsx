import { Suspense } from 'react'

import PostList from '@/features/posts/components/PostList'
import TagList from '@/features/tags/components/TagList'
import Hero from '@/shared/components/Hero'

const Page = () => {
  return (
    <>
      <Hero>
        <p className={'text-black'}>HERO SECTION</p>
      </Hero>
      <main className={'flex justify-between'}>
        <Suspense fallback={'fetching post list...'}>
          <PostList />
        </Suspense>
        <Suspense fallback={'fetching tags list...'}>
          <TagList />
        </Suspense>
      </main>
    </>
  )
}

export default Page
