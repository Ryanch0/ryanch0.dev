import { PropsWithChildren } from 'react'

import { createMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createMetadata({
  title: 'Blog Archive',
  description: 'A space for storing insights',
  ogDescription: 'A space for storing insights',
  url: '/posts'
})

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

export default Layout
