import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'

const TagListSkeleton = () => {
  return (
    <div className={'sticky top-13 z-40 -mx-4 backdrop-blur-sm md:-mx-6'}>
      <nav className={'mx-4 md:mx-6'}>
        <ScrollArea className="pt-2 pb-4 whitespace-nowrap">
          <ul className="align-center flex gap-2">
            <li>
              <Skeleton className="h-8 w-12 rounded-full" />
            </li>
            {Array.from({ length: 7 }).map((_, index) => (
              <li key={index}>
                <Skeleton className="h-8 w-16 rounded-full" />
              </li>
            ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </nav>
    </div>
  )
}

export default TagListSkeleton
