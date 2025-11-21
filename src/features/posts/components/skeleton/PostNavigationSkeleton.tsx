import { Skeleton } from '@/components/ui/skeleton'

const PostNavigationSkeleton = () => {
  return (
    <div className="mt-12 flex items-center justify-between gap-4 border-t py-6">
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-5 w-48" />
      </div>

      <div className="flex-1 space-y-2 text-right">
        <Skeleton className="ml-auto h-3 w-20" />
        <Skeleton className="ml-auto h-5 w-48" />
      </div>
    </div>
  )
}

export default PostNavigationSkeleton
