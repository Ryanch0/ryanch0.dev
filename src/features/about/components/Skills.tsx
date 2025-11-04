import AboutContent from '@/features/about/components/AboutContent'
import TagItem from '@/features/tags/components/TagItem'

const Skills = () => {
  return (
    <AboutContent key={'skills'} title={'Skills'}>
      <div className={'py-1'}>
        <p className={'accent-font-style pb-1 text-sm font-medium'}>
          Frontend Development
        </p>

        <div className="my-1 flex flex-wrap gap-1.5 text-xs font-light">
          {[
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript (ES6+)',
            'Vite',
            'React Router',
            'HTML5',
            'CSS3',
            'Sass',
            'Tailwind CSS'
          ].map((tag) => (
            <TagItem tag={tag} key={tag} />
          ))}
        </div>
      </div>

      <div className={'py-1'}>
        <p className={'accent-font-style pb-1 text-sm font-medium'}>
          State & Data Management
        </p>
        <div className="my-1 flex flex-wrap gap-1.5 text-xs font-light">
          {['React Query', 'Jotai', 'React Hook Form', 'Zod', 'Axios'].map(
            (tag) => (
              <TagItem tag={tag} key={tag} />
            )
          )}
        </div>
      </div>

      <div className={'py-1'}>
        <p className={'accent-font-style pb-1 text-sm font-medium'}>
          UI & Component Design
        </p>
        <div className="my-1 flex flex-wrap gap-1.5 text-xs font-light">
          {[
            'Storybook',
            'Ant Design',
            'Responsive Design',
            'Accessibility (a11y)'
          ].map((tag) => (
            <TagItem tag={tag} key={tag} />
          ))}
        </div>
      </div>

      <div className={'py-1'}>
        <p className={'accent-font-style pb-1 text-sm font-medium'}>
          Testing & Mocking
        </p>
        <div className="my-1 flex flex-wrap gap-1.5 text-xs font-light">
          {['MSW (Mock Service Worker)'].map((tag) => (
            <TagItem tag={tag} key={tag} />
          ))}
        </div>
      </div>

      <div className={'py-1'}>
        <p className={'accent-font-style pb-1 text-sm font-medium'}>
          Code Quality & Tooling
        </p>
        <div className="my-1 flex flex-wrap gap-1.5 text-xs font-light">
          {['Git', 'ESLint', 'Prettier', 'Clean Architecture'].map((tag) => (
            <TagItem tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </AboutContent>
  )
}

export default Skills
