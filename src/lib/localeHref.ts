import { useLocale } from 'next-intl'

export function useLocaleHref(href: string) {
  const locale = useLocale()

  if (href.startsWith(`/${locale}`)) return href

  return `/${locale}${href.startsWith('/') ? href : `/${href}`}`
}
