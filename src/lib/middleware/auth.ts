import { PATH } from '@/constants/path'
import { createClientForServer } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_PATHS = ['/write']
const LOCALES = ['en', 'ko']

export async function authMiddleware(
  request: NextRequest,
  baseResponse: NextResponse
) {
  const pathname = request.nextUrl.pathname
  const splitPathname = pathname.split('/')
  const segments = splitPathname[1]

  const isProtected = PROTECTED_PATHS.some((p) => {
    if (LOCALES.includes(segments)) {
      return pathname.startsWith(`/${segments}${p}`)
    }

    return pathname.startsWith(p)
  })

  if (!isProtected) return baseResponse

  const supabase = await createClientForServer()
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  if (!user || error) {
    const redirectUrl = new URL(PATH.LOGIN, request.url)
    redirectUrl.searchParams.set('redirect', pathname)

    return NextResponse.redirect(redirectUrl)
  }

  return baseResponse
}
