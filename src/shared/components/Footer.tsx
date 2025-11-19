'use client'

import { EXTERNAL_URL } from '@/constants/path'
import MainLink from '@/shared/components/MainLink'

const Footer = () => {
  return (
    <footer
      className={
        'mt-auto mb-6 flex items-center justify-between text-sm md:mb-8'
      }
    >
      <div>
        Copyright ©
        <MainLink title={<h4>Ryan Cho</h4>} />
      </div>

      <MainLink
        className={'italic'}
        title={<h4>Source Code</h4>}
        href={EXTERNAL_URL.SOURCE_CODE}
        rel={'noopener noreferrer'}
        target={'_blank'}
      />
    </footer>
  )
}

export default Footer
