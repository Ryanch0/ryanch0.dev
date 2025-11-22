import { Skeleton } from '@/components/ui/skeleton'

const PostContentSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/5" />

      <div className="second-font-style space-y-2 py-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="mt-1 flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-18 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      <div className="mt-8 space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />

        <div className="py-6">
          <Skeleton className="h-6 w-2/3" />
        </div>

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}

export default PostContentSkeleton
