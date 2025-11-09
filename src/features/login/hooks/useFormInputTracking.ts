import { RefObject, useEffect, useState } from 'react'

const useFormInputTracking = (
  emailRef: RefObject<HTMLInputElement | null>,
  passwordRef: RefObject<HTMLInputElement | null>
) => {
  const [showCaptcha, setShowCaptcha] = useState(false)

  useEffect(() => {
    const checkInputs = () => {
      const emailLength = emailRef.current?.value.length ?? 0
      const passwordLength = passwordRef.current?.value.length ?? 0

      setShowCaptcha(emailLength > 0 && passwordLength > 0)
    }

    const emailInput = emailRef.current
    const passwordInput = passwordRef.current

    emailInput?.addEventListener('input', checkInputs)
    passwordInput?.addEventListener('input', checkInputs)

    return () => {
      emailInput?.removeEventListener('input', checkInputs)
      passwordInput?.removeEventListener('input', checkInputs)
    }
  }, [emailRef, passwordRef])

  return { showCaptcha }
}

export default useFormInputTracking
