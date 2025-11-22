'use client'

import { ReactNode } from 'react'

import { useLocaleHref } from '@/lib/localeHref'
import useShouldUseTransition from '@/shared/hooks/useShouldUseTransition'
import { Link as VTLink } from 'next-view-transitions'
import Link from 'next/link'

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
  const shouldUseTransition = useShouldUseTransition()

  if (!shouldUseTransition) {
    return (
      <Link
        href={localeHref}
        prefetch
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    )
  }

  return (
    <VTLink
      prefetch
      href={localeHref}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </VTLink>
  )
}
