import { RefObject, useEffect, useState } from 'react'

const useMobileTocVisible = (
  ref: RefObject<HTMLElement | null>,
  headerHeight = 80
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const handleScroll = () => {
      const rect = ref.current!.getBoundingClientRect()

      if (rect.top <= headerHeight) {
        return setIsIntersecting(true)
      }

      return setIsIntersecting(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref, headerHeight])

  return isIntersecting
}

export default useMobileTocVisible
