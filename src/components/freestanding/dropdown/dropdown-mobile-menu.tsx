import cn from 'classnames'
import React from 'react'

import Container from '../containers/container'

import { dropdownMobileMenu } from './dropdown-mobile-menu.module.css'

interface PropTypes {
  className?: string
  children: React.ReactNode
}

export const DropdownMobileMenu = ({ className, children }: PropTypes) => (
  <div className={cn(dropdownMobileMenu, className && className)}>
    <Container
      fluid={true}
      flexContainer={'column'}
      justify={'start'}
      alignItems={'stretch'}
    >
      {children}
    </Container>
  </div>
)
