import { ICON_LIST } from '@/constants/iconList'
import Footer from '@/shared/components/Footer'
import LinkIcon from '@/shared/components/Header/components/LinkIcon'

const Page = () => {
  return (
    <div className={'flex h-[calc(100vh-54px)] flex-col gap-4 pt-18'}>
      <div>
        <h2 className={'title-style pb-8'}>Ryan Cho</h2>
        <p className={'text-2xl font-light'}>
          Building worlds from semicolons and dreams, where structure embraces
          spontaneity. Driven by exploration, shaping solutions that blur the
          line between thought and action.
        </p>

        <p className="pt-6 text-xl font-light">
          Currently work at{' '}
          <strong className={'font-semibold'}>Naver Financial</strong> as a
          frontend developer, crafting seamless user experiences.
        </p>

        <ul className={'flex pt-3'}>
          {ICON_LIST.map(({ href, icon, id }) => (
            <li key={id}>
              <LinkIcon href={href} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Page
