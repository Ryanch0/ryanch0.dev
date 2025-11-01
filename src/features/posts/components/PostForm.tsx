'use client'

import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import MarkDownField from '@/features/markdown/components/MarkDownField'
import useMarkDownFormField from '@/features/markdown/hooks/useMarkDownFormField'

type Props = {
  title?: string
  subtitle?: string
  content?: string
  tags?: string[]
  action: (formData: FormData) => Promise<void>
}
const PostForm = ({ title, subtitle, content = '', tags, action }: Props) => {
  const { value, setValue, handleDrop } = useMarkDownFormField({
    defaultValue: content
  })
  const { pending } = useFormStatus()

  return (
    <form action={action}>
      <Input
        id="title"
        type="text"
        placeholder="Title"
        name="title"
        className="border-none py-10 !text-3xl autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:[-webkit-text-fill-color:rgb(89,89,89)] focus-visible:ring-0 focus-visible:ring-offset-0 dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)] dark:autofill:[-webkit-text-fill-color:rgb(199,199,199)]"
        defaultValue={title}
      />
      <Input
        id="subtitle"
        type="text"
        placeholder="Subtitle"
        name="subtitle"
        className="border-none py-5 !text-xl autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:[-webkit-text-fill-color:rgb(89,89,89)] focus-visible:ring-0 focus-visible:ring-offset-0 dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)] dark:autofill:[-webkit-text-fill-color:rgb(199,199,199)]"
        defaultValue={subtitle}
      />
      <Input
        id="tags"
        type="text"
        placeholder="Tags"
        name="tags"
        className="border-none py-5 !text-lg autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:[-webkit-text-fill-color:rgb(89,89,89)] focus-visible:ring-0 focus-visible:ring-offset-0 dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)] dark:autofill:[-webkit-text-fill-color:rgb(199,199,199)]"
        defaultValue={tags}
      />
      <MarkDownField
        value={value}
        setValue={setValue}
        handleDrop={handleDrop}
      />
      <input name="content" type={'hidden'} value={value} />
      <Button
        type="submit"
        className="bg-base-light dark:bg-base-dark text-accent-dark dark:text-accent-light hover:bg-base-light/70 dark:hover:bg-base-dark/70 mt-1.5 w-full cursor-pointer"
        disabled={pending}
      >
        {pending ? 'Logging in...' : 'Submit'}
      </Button>
    </form>
  )
}

export default PostForm
