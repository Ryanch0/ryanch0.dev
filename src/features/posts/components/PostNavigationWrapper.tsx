import {
  findPostBySlugHandler,
  getPreviousNextPostHandler
} from '@/external/handler/posts/postsHandler'
import PostNavigation from '@/features/posts/components/PostNavigation'
import { getColumnFromLocale } from '@/features/posts/utils/getColumnFromLocale'

type Props = {
  slug: string
  locale: string
}
const PostNavigationWrapper = async ({ slug, locale }: Props) => {
  const data = await findPostBySlugHandler(slug)
  const { prev, next } = await getPreviousNextPostHandler(data.raw_date)

  return (
    <PostNavigation
      previousPost={{
        slug: prev.slug,
        title: getColumnFromLocale(locale, prev.title, prev.title_kr)
      }}
      nextPost={{
        slug: next.slug,
        title: getColumnFromLocale(locale, next.title, next.title_kr)
      }}
    />
  )
}

export default PostNavigationWrapper
