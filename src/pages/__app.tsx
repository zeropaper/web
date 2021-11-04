import type { AppProps } from 'next/app'
import 'normalize.css'
import 'phosphor-icons/src/css/phosphor.css'
import 'prismjs/themes/prism.css'
import 'remark-admonitions/styles/classic.css'

import './src/styles/global.css'
import './src/styles/grid.css'
import './src/styles/icons.css'
import './src/styles/themes/default.css'
import './src/styles/typography.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
