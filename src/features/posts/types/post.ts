export type Post = {
  id: number
  title: string
  slug: string
  thumbnail_url?: string
  preview: string
  content: string
  tags?: string[]
  date: Date
  last_modified?: Date
  meta_description: string
}

export type FormattedPost = Omit<Post, 'date' | 'last_modified'> & {
  date: string
  last_modified: string
}
