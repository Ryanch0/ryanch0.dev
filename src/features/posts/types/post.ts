export type Post = {
  id: number
  title: string
  date: Date
  last_modified: Date
  preview: string
  contents: string
  tags: string[]
  meta_description: string
}

export type FormattedPost = Omit<Post, 'date' | 'last_modified'> & {
  date: string
  last_modified: string
}
