import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'normalize.css'
import 'phosphor-icons/src/css/phosphor.css'
import 'prismjs/themes/prism.css'
import 'remark-admonitions/styles/classic.css'

import '../styles/global.css'
import '../styles/grid.css'
import '../styles/icons.css'
import '../styles/themes/default.css'
import '../styles/typography.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
