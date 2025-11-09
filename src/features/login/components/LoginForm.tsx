'use client'

import { useActionState, useRef, useState } from 'react'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useFormInputTracking from '@/features/login/hooks/useFormInputTracking'
import { signInFormState } from '@/features/login/types/login'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { AlertCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

type FormState = {
  error?: signInFormState
}

type Props = {
  action: (
    _: FormState,
    formData: FormData,
    redirectUrl?: string
  ) => Promise<FormState>
}

const LoginForm = ({ action }: Props) => {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect') || undefined
  const [captchaToken, setCaptchaToken] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { showCaptcha } = useFormInputTracking(emailRef, passwordRef)
  const wrappedAction = async (
    _: FormState,
    formData: FormData
  ): Promise<FormState> => {
    formData.append('captchaToken', captchaToken)

    return action(_, formData, redirectUrl)
  }

  const [state, formAction, isPending] = useActionState(wrappedAction, {})
  const error = state.error

  const renderErrorMessage = (field: 'email' | 'password' | 'message') => {
    const errorMessage = error?.[field] || ''
    const errorStyle = error?.[field] ? 'opacity-100 mb-3 ' : 'opacity-0 h-2'

    return (
      <p className={`${errorStyle} text-destructive text-sm transition-all`}>
        {errorMessage}
      </p>
    )
  }

  return (
    <form action={formAction} className="mx-auto mt-4 w-full max-w-[600px]">
      {error?.message && (
        <Alert variant="destructive" className={'mb-4'}>
          <AlertCircle className="mb-1 h-4 w-4" />
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          ref={emailRef}
          type="email"
          placeholder="email"
          name="email"
          autoComplete="email"
          className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:[-webkit-text-fill-color:rgb(89,89,89)] focus-visible:ring-0 focus-visible:ring-offset-0 dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)] dark:autofill:[-webkit-text-fill-color:rgb(199,199,199)]"
          aria-invalid={!!error?.email}
        />
        {renderErrorMessage('email')}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          ref={passwordRef}
          type="password"
          placeholder="password"
          name="password"
          autoComplete="current-password"
          className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:[-webkit-text-fill-color:rgb(89,89,89)] focus-visible:ring-0 focus-visible:ring-offset-0 dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)] dark:autofill:[-webkit-text-fill-color:rgb(199,199,199)]"
          aria-invalid={!!error?.password}
        />
        {renderErrorMessage('password')}
      </div>

      <div
        className={`mt-1 mb-2 ${
          showCaptcha
            ? 'visible mt-1 max-h-[100px] opacity-100'
            : 'invisible max-h-0 opacity-0'
        } transition-all duration-300 ease-in-out`}
      >
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
          onVerify={setCaptchaToken}
          theme="dark"
          languageOverride={'en'}
        />
      </div>

      <Button
        type="submit"
        className="bg-base-light dark:bg-base-dark text-accent-dark dark:text-accent-light hover:bg-base-light/70 dark:hover:bg-base-dark/70 mt-1.5 w-full cursor-pointer"
        disabled={isPending}
      >
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  )
}

export default LoginForm
