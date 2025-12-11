import { routing } from '@/i18n/routing'
import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

export function intlMiddleware(request: NextRequest) {
  const middleware = createIntlMiddleware(routing)

  return middleware(request)
}
