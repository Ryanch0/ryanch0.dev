'use server'

import { PATH } from '@/constants/path'
import { signInHandler } from '@/external/handler/auth/authHandler'
import { redirect } from 'next/navigation'

export const signInAction = async (
  _: unknown,
  formData: FormData,
  request?: Request,
  redirectUrl?: string
) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const result = await signInHandler(email, password, request)

  if (result?.error) {
    return { error: result.error }
  }

  return redirect(redirectUrl || PATH.POSTS)
}
