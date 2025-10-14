import { getAllTags } from '@/lib/queries/posts'

const TagList = async () => {
  const tags = await getAllTags()

  return (
    <ul>
      {tags.map((tag) => {
        return <li key={tag}>{tag}</li>
      })}
    </ul>
  )
}

export default TagList
