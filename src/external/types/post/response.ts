import { Post } from '@/external/types/post/entity'

export type PostListItem = Pick<
  Post,
  'id' | 'title' | 'preview' | 'tags' | 'slug' | 'date' | 'subtitle'
>

export type PostForm = Pick<
  Post,
  'id' | 'title' | 'content' | 'tags' | 'subtitle'
>

export type PostSlug = Pick<Post, 'slug'>
