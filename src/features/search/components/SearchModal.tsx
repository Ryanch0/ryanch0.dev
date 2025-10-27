'use client'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { PATH } from '@/constants/path'
import useSearchModalUseCase from '@/features/search/hooks/usecases/useSearchModalUseCase'
import Link from 'next/link'

type Props = {
  isOpen: boolean
  onClose: () => void
}
const SearchModal = ({ isOpen, onClose }: Props) => {
  const { search, posts, loading, onChange, onCloseModal } =
    useSearchModalUseCase({ onClose })

  if (!isOpen) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseModal}>
      <DialogContent className="max-w-2xl gap-0 border-0 p-0 shadow-lg">
        <DialogTitle className="sr-only">Search Posts</DialogTitle>
        <Command shouldFilter={false} className="rounded-lg">
          <CommandInput
            value={search}
            onValueChange={onChange}
            placeholder="Search posts..."
          />
          <CommandList className="max-h-[400px]">
            {loading ? (
              <div className="text-muted-foreground py-12 text-center text-sm">
                Searching...
              </div>
            ) : posts.length > 0 ? (
              <CommandGroup className="p-2">
                {posts.map((post) => (
                  <CommandItem
                    key={post.id}
                    className="aria-selected:bg-accent flex cursor-pointer flex-col items-start gap-1 rounded-md px-3 py-3"
                    onSelect={() => onCloseModal()}
                  >
                    <h2>
                      <Link href={`${PATH.POSTS}/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : search ? (
              <CommandEmpty className="py-12 text-center text-sm">
                No results found for {search}
              </CommandEmpty>
            ) : (
              <div className="text-muted-foreground py-12 text-center text-sm">
                Type to search posts...
              </div>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export default SearchModal
