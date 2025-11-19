import { LuLanguages } from 'react-icons/lu'

import { Link, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

const LangToggle = () => {
  const pathname = usePathname()
  const currentLocale = useLocale()
  const locale = currentLocale === 'en' ? 'ko' : 'en'

  return (
    <Link href={pathname} locale={locale}>
      <LuLanguages
        size={38}
        className={
          'cursor-pointer p-1.5 transition-transform duration-400 ease-out hover:scale-110'
        }
      />
    </Link>
  )
}

export default LangToggle
