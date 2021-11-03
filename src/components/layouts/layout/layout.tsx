import cn from 'classnames'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'
import React from 'react'

import * as footer from '../../../page-content/navigation/navigation-footer'
import * as nav from '../../../page-content/navigation/navigation-header'
import CookieBanner from '../cookie-banner/cookie-banner'
import Footer from '../footer/footer'
import Announcement from '../navigation/announcement'
import Navigation from '../navigation/navigation'

import * as styles from './layout.module.css'

import oryLogoPrimary from '../../../images/logo/logo-ory-primary.svg'
import oryLogoWhite from '../../../images/logo/logo-ory-white.svg'

interface PropTypes {
  theme?: string
  children?: React.ReactNode
}

const Layout = ({ children, theme }: PropTypes) => (
  <div className={cn(styles.layout)}>
    <Navigation
      logo={oryLogoPrimary}
      {...nav.sideNav}
      {...nav.dropdownMenu}
      {...nav.mobileMenu}
    />
    <main className={theme ? `theme-${theme}` : ''}>{children}</main>
    <CookieBanner />
    <Footer
      logo={oryLogoWhite}
      {...footer.copyright}
      {...footer.social}
      {...footer.legal}
      {...footer.links}
    />
  </div>
)

export default Layout
