const TagItem = ({ tag }: { tag: string }) => {
  return (
    <span
      key={tag}
      className="bg-section-light dark:bg-section-dark text-second-light dark:text-second-dark rounded-sm px-2 py-0.5"
    >
      {tag}
    </span>
  )
}

export default TagItem
