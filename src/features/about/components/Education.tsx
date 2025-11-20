import AboutContent from '@/features/about/components/AboutContent'
import { getTranslations } from 'next-intl/server'

const Education = async () => {
  const t = await getTranslations('AboutPage.aboutContent.education')

  return (
    <AboutContent key={'education'} title={'Education'}>
      <div className={'flex flex-col gap-4'}>
        <div>
          <h2 className={'accent-font-style'}>
            {t('univ.name')} -{' '}
            <span className={'font-family-sans text-sm'}>
              {t('univ.major')}
            </span>
          </h2>
          <p
            className={'text-second-light/70 dark:text-underline-dark text-sm'}
          >
            {t('univ.location')}
          </p>
        </div>
        <div>
          <h2 className={'accent-font-style'}>
            {t('college.name')} -{' '}
            <span className={'font-family-sans text-sm'}>
              {t('college.major')}
            </span>
          </h2>
          <p
            className={'text-second-light/70 dark:text-underline-dark text-sm'}
          >
            {t('college.location')}
          </p>
        </div>
      </div>
    </AboutContent>
  )
}

export default Education
