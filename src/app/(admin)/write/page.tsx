import { createPost } from '@/actions/post'

const Page = () => {
  return (
    <>
      <h2>New Post</h2>
      <form action={createPost}>
        <input name="title" type="text" />
        <input name="tags" type="text" />
        <textarea name="content" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Page
