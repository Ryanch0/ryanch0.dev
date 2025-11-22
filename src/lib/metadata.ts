import { Metadata } from 'next'

export const siteConfig = {
  title: 'Ryan Cho',
  description: 'Where obstacles become elegant solutions',
  url: 'https://ryanch0.dev',
  image: '/og.png'
}

export const createMetadata = ({
  title = siteConfig.title,
  ogTitle,
  description = siteConfig.description,
  ogDescription,
  url = siteConfig.url,
  locale = 'en'
}: {
  title?: string
  ogTitle?: string
  description?: string
  ogDescription?: string
  url?: string
  locale?: string
}): Metadata => {
  const absoluteUrl = `${siteConfig.url}${url}`

  return {
    metadataBase: new URL(siteConfig.url),
    title: title,
    description: description,
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: absoluteUrl,
      type: 'website',
      locale: locale,
      images: siteConfig.image
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description: ogDescription || description,
      images: siteConfig.image
    }
  }
}
