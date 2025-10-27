import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { PATH } from '@/constants/path'
import { listAllTagsHandler } from '@/external/handler/posts/postsHandler'
import TagItem from '@/features/tags/components/TagItem'

const TagList = async () => {
  const tags = await listAllTagsHandler()

  return (
    <div className={'sticky top-13 z-40 -mx-4 backdrop-blur-sm md:-mx-6'}>
      <nav className={'mx-4 md:mx-6'}>
        <ScrollArea className="pt-2 pb-4 whitespace-nowrap">
          <ul className="align-center flex gap-2">
            <li key="all">
              <TagItem href={PATH.POSTS} tagName={'All'} defaultTag />
            </li>
            {tags.map((tag) => (
              <li key={tag}>
                <TagItem href={`${PATH.POSTS}?tag=${tag}`} tagName={tag} />
              </li>
            ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </nav>
    </div>
  )
}

export default TagList
