import Head from 'next/head'

export interface PropTypes {
  description?: string
  lang?: string
  meta?: any[]
  title: string
  keywords?: string
  canonical?: string
}

const author = 'ORY'

const SEO = ({ description, title, keywords, canonical }: PropTypes) => {
  const siteTitle = `${title}${
    process.env.GATSBY_DOMAIN === 'ory.sh' && ' - ory.sh'
  }`
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  )
}

export default SEO
