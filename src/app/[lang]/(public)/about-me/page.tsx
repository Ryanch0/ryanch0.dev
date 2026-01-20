import { EXTERNAL_URL } from '@/constants/path'
import Education from '@/features/about/components/Education'
import Languages from '@/features/about/components/Languages'
import Projects from '@/features/about/components/Projects'
import Skills from '@/features/about/components/Skills'
import Footer from '@/shared/components/Footer'
import MainLink from '@/shared/components/MainLink'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

const Page = async () => {
  const t = await getTranslations('AboutPage')

  return (
    <div className={'layout-content-wrapper'}>
      <div>
        <h2 className={'title-style'}>{t('title')}</h2>
        <div className={'second-font-style py-1'}>
          <p>{t('description')}</p>
          <span>by</span> <MainLink />
        </div>
        <main className={'layout-content'}>
          <p className={'home-name italic'}>
            {t.rich('info', {
              strong: (chunk) => (
                <strong className="accent-font-style">{chunk}</strong>
              )
            })}
          </p>
          <div className={'home-description pt-2 pb-6'}>
            <p>
              {t('contact.text1')}
              <span>
                <Link
                  href={`mailto:${EXTERNAL_URL.EMAIL}`}
                  className={
                    'accent-font-style decoration-underline-light dark:decoration-underline-dark hover:bg-section-light dark:hover:bg-section-dark inline-block rounded-sm px-1 text-base underline decoration-1 underline-offset-4 transition-colors ease-in-out hover:no-underline'
                  }
                >
                  ryan@ryanch0.dev ↗
                </Link>
              </span>
              {t('contact.text2')}
              <Link
                href={`/resume.pdf`}
                className={
                  'accent-font-style decoration-underline-light dark:decoration-underline-dark hover:bg-section-light dark:hover:bg-section-dark inline-block rounded-sm px-1 text-base underline decoration-1 underline-offset-4 transition-colors ease-in-out hover:no-underline'
                }
                target={'_blank'}
              >{`${t('contact.resumeTitle')} ↗`}</Link>
              {t('contact.text3')}
            </p>
          </div>
          <div className={'pt-4'}>
            <Projects />
            <Skills />
            <Languages />
            <Education />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Page
