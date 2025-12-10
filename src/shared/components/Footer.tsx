'use client'

import { EXTERNAL_URL } from '@/constants/path'
import MainLink from '@/shared/components/MainLink'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Components')

  return (
    <footer
      className={
        'mt-auto mb-6 flex items-center justify-between text-sm md:mb-8'
      }
    >
      <div>
        Copyright ©
        <MainLink title={<h4>{t('name')}</h4>} />
      </div>

      <a
        className={
          'accent-font-style decoration-underline-light dark:decoration-underline-dark hover:bg-section-light dark:hover:bg-section-dark inline-block rounded-sm px-1 text-base italic underline decoration-1 underline-offset-4 transition-colors ease-in-out hover:no-underline'
        }
        href={EXTERNAL_URL.SOURCE_CODE}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        <h4>{t('sourceCode')}</h4>
      </a>
    </footer>
  )
}

export default Footer
