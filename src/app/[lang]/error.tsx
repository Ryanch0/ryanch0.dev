'use client'

import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import MainLink from '@/shared/components/MainLink'

const Error = () => {
  return (
    <main className="layout">
      <Header />
      <div className={'layout-content-wrapper'}>
        <div>
          <h2 className={'title-style'}>Error</h2>
          <div className={'second-font-style py-1'}>
            <p>Something went wrong</p>
            <span>by</span> <MainLink />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default Error
