import { NextRequest, NextResponse } from 'next/server'

export function withIp(request: NextRequest, baseResponse: NextResponse) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  baseResponse.headers.set('x-client-ip', ip)

  return baseResponse
}
