import renderMdxComponents from '@/features/markdown/components/renderMdxComponents'
import { MDXRemote } from 'next-mdx-remote-client/rsc'

type Props = {
  content: string
}
const PostDetail = async ({ content }: Props) => {
  const components = renderMdxComponents() //TODO markdown styling

  return (
    <div className="prose">
      <MDXRemote source={content} components={components} />
    </div>
  )
}

export default PostDetail
