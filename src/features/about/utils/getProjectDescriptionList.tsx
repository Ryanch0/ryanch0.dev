import { _Translator } from 'next-intl'

const getProjectDescriptionList = (
  length: number,
  key: string,
  t: _Translator
) => {
  return Array.from({ length }, (_, i) => {
    return t(`${key}.${i}`)
  }).map((item) => {
    return (
      <li className={'bullet'} key={item}>
        {item}
      </li>
    )
  })
}

export default getProjectDescriptionList
