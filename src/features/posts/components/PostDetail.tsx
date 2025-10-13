import { MOCK_MARKDOWN } from '@/constants/mock'
import renderMdxComponents from '@/features/markdown/components/renderMdxComponents'
import { MDXRemote } from 'next-mdx-remote-client/rsc'

const PostDetail = async () => {
  const components = renderMdxComponents() //TODO markdown styling
  await new Promise((resolve) => setTimeout(resolve, 100)) //TODO fetch data

  return (
    <div className="prose">
      <MDXRemote source={MOCK_MARKDOWN} components={components} />
    </div>
  )
}

export default PostDetail
