import { Skeleton } from '@/components/ui/skeleton'

const PostListSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 2 }).map((_, yearIndex) => (
        <section
          key={yearIndex}
          className={
            'group/year border-border flex flex-col border-y duration-300 md:flex-row'
          }
        >
          <div className={'my-6 md:my-6 md:w-[15%]'}>
            <Skeleton className="h-7 w-16" />
          </div>

          <ul className="space-y-6 md:my-6 md:w-[85%]">
            {Array.from({ length: 5 }).map((_, postIndex) => (
              <li key={postIndex} className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4.5 w-4/6" />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default PostListSkeleton
