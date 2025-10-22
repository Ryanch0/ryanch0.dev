import { IconType } from 'react-icons'

type Props = {
  href: string
  size?: number
  icon: IconType
}

const LinkIcon = ({ size = 18, href, icon: Icon }: Props) => {
  return (
    <a href={href} target="_blank">
      <Icon
        size={size}
        className={'hover-bg-invert box-content rounded-md p-1.5'}
      />
    </a>
  )
}

export default LinkIcon
