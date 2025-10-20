'use client'

import MarkDownField from '@/features/markdown/components/MarkDownField'
import useMarkDownFormField from '@/features/markdown/hooks/useMarkDownFormField'

type Props = {
  title?: string
  content?: string
  tags?: string[]
  action: (formData: FormData) => Promise<void>
}
const PostForm = ({ title, content = '', tags, action }: Props) => {
  const { value, setValue, handleDrop } = useMarkDownFormField({
    defaultValue: content
  })

  return (
    <form action={action}>
      <input name="title" type="text" defaultValue={title} />
      <input name="tags" type="text" defaultValue={tags} />
      <MarkDownField
        value={value}
        setValue={setValue}
        handleDrop={handleDrop}
      />
      <input name="content" type={'hidden'} value={value} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
