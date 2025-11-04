import { PropsWithChildren } from 'react'

import { createMetadata } from '@/lib/metadata'
import Header from '@/shared/components/Header/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = createMetadata({})

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="layout">
        <Header />
        {children}
      </main>
    </>
  )
}
