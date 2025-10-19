'use client'

import { useState } from 'react'

import MarkDownForm from '@/features/markdown/components/MarkDownForm'

type Props = {
  title?: string
  content?: string
  tags?: string[]
  action: (formData: FormData) => Promise<void>
}
const PostForm = ({ title, content = '', tags, action }: Props) => {
  const [value, setValue] = useState<string | undefined>(content)

  return (
    <form action={action}>
      <input name="title" type="text" defaultValue={title} />
      <input name="tags" type="text" defaultValue={tags} />
      <MarkDownForm defaultValue={value} setValue={setValue} />
      <input name="content" type={'hidden'} value={value} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
