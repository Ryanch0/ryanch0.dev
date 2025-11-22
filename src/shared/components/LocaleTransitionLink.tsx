'use client'

import { ReactNode } from 'react'

import { useLocaleHref } from '@/lib/localeHref'
import { Link as VTLink } from 'next-view-transitions'

type Props = {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}
export default function LocaleTransitionLink({
  href,
  children,
  className,
  target,
  rel
}: Props) {
  const localeHref = useLocaleHref(href)

  return (
    <VTLink href={localeHref} className={className} target={target} rel={rel}>
      {children}
    </VTLink>
  )
}
