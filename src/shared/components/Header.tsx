import { PATH } from '@/constants/path'
import SearchModalTrigger from '@/features/search/components/SearchModalTrigger'
import ThemeToggle from '@/shared/components/ThemeToggle'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="layout fixed top-0 z-50 h-11 backdrop-blur-sm">
      <nav className="px-3 py-4">
        <div className="hidden items-center gap-8 md:flex md:justify-end">
          <Link href={PATH.MAIN}>LOGO</Link>
          <Link href={PATH.ABOUT_ME}>About me</Link>
          <SearchModalTrigger />
          <ThemeToggle />
          <Link href={PATH.WRITE}>Create Post</Link>
        </div>

        <button className="md:hidden">{/* 햄버거 아이콘 */}</button>
      </nav>
    </header>
  )
}

export default Header
