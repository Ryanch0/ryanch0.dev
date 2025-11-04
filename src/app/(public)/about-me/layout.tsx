import { PropsWithChildren } from 'react'

import { createMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createMetadata({
  title: 'About',
  description: 'Who I am and What I do',
  ogDescription: 'Who I am and What I do',
  url: '/about-me'
})

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

export default Layout
