'use client'

import useScrollProgress from '@/features/toc/hooks/useScrollProgress'

const CircularScrollProgressBar = () => {
  const progress = useScrollProgress()

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style={{ transform: 'rotate(-90deg)' }}
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        strokeWidth="4"
        className={'stroke-section-dark dark:stroke-section-dark'}
        fill="none"
        strokeLinecap="round"
      />

      <circle
        cx="10"
        cy="10"
        r="8"
        strokeWidth="4"
        className={'stroke-underline-light dark:stroke-underline-dark'}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={`${progress} 1`}
        strokeDashoffset="0"
        pathLength="1"
      />
    </svg>
  )
}

export default CircularScrollProgressBar
