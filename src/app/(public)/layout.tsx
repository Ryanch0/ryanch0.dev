import { PropsWithChildren } from 'react'

import Header from '@/shared/components/Header'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
