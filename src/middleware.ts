import { authMiddleware } from '@/lib/middleware/auth'
import { intlMiddleware } from '@/lib/middleware/intl'
import { withIp } from '@/lib/middleware/ip'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request)

  if (intlResponse?.redirected) return intlResponse

  const ipResponse = withIp(request, intlResponse)

  return await authMiddleware(request, ipResponse)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/write/:path*']
}
