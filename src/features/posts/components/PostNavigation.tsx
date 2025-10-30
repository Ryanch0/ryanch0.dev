type Props = {
  previousPost?: { slug: string; title: string }
  nextPost?: { slug: string; title: string }
}
const PostNavigation = ({ previousPost, nextPost }: Props) => {
  return (
    <section className="mt-16 mb-12 flex items-stretch justify-between gap-1 text-lg">
      {previousPost && (
        <a
          className="group flex flex-col gap-1"
          href={`/posts/${previousPost.slug}`}
        >
          <div className="text-second-light dark:text-second-dark dark:group-hover:text-base-dark group-hover:text-base-light transition-colors">
            Previous
          </div>
          <span className="text-accent-light dark:text-accent-dark group-hover:bg-section-light dark:group-hover:bg-section-dark -mx-1 rounded-sm px-1 transition-colors">
            {previousPost.title}
          </span>
        </a>
      )}

      {nextPost && (
        <a
          className="group text-second hover:text-body ml-auto flex flex-col gap-1 text-right"
          href={`/posts/${nextPost.slug}`}
        >
          <div className="text-second-light dark:text-second-dark dark:group-hover:text-base-dark group-hover:text-base-light transition-colors">
            Next
          </div>
          <span className="text-accent-light dark:text-accent-dark group-hover:bg-section-light dark:group-hover:bg-section-dark -mx-1 rounded-sm px-1 transition-colors">
            {nextPost.title}
          </span>
        </a>
      )}
    </section>
  )
}

export default PostNavigation
