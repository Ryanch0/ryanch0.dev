'use client'

import { MouseEvent } from 'react'

import { EXTERNAL_URL } from '@/constants/path'
import MainLink from '@/shared/components/MainLink'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  const onClickMainLink = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') return

    e.preventDefault()
    window.location.reload()
  }

  return (
    <footer
      className={
        'mt-auto mb-6 flex items-center justify-between text-sm md:mb-8'
      }
    >
      <div>
        Copyright ©
        <MainLink onClick={onClickMainLink} title={<h4>Ryan Cho</h4>} />
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
