import { EXTERNAL_URL } from '@/constants/path'
import MainLink from '@/shared/components/MainLink'

const Footer = () => {
  return (
    <footer
      className={'mt-auto mb-8 flex items-center justify-between text-sm'}
    >
      <div>
        Copyright ©
        <MainLink title={<h2>Ryan Cho</h2>} />
      </div>

      <MainLink
        className={'italic'}
        title={<h2>Source Code</h2>}
        href={EXTERNAL_URL.SOURCE_CODE}
        rel={'noopener noreferrer'}
        target={'_blank'}
      />
    </footer>
  )
}

export default Footer
