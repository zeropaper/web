import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'

import * as styles from './adopters-logo.module.css'

interface PropTypes {
  children: React.ReactNode
  className?: string
}

const AdoptersLogo = ({ children, className }: PropTypes) => (
  <Container className={cn(styles.adoptersLogo, className && className)}>
    {children}
  </Container>
)

export default AdoptersLogo
