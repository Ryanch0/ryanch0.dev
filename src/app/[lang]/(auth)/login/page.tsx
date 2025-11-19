import { Suspense } from 'react'

import { signInAction } from '@/features/login/actions/login'
import LoginForm from '@/features/login/components/LoginForm'
import Footer from '@/shared/components/Footer'
import MainLink from '@/shared/components/MainLink'
import { getTranslations } from 'next-intl/server'

const Page = async () => {
  const t = await getTranslations('LoginPage')

  return (
    <div className={'flex h-[calc(100dvh-54px)] flex-col gap-4 pt-6 sm:pt-18'}>
      <div>
        <h2 className={'title-style'}>{t('title')}</h2>
        <div className={'second-font-style py-1'}>
          <p>{t('description')}</p>
          <span>by</span> <MainLink />
        </div>
        <main className={'layout-content'}>
          <Suspense fallback={<></>}>
            <LoginForm action={signInAction} />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Page
