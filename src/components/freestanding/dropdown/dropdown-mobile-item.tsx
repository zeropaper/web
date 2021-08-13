import cn from 'classnames'
import React from 'react'

import Button from '../button/button'

import * as styles from './dropdown-mobile-item.module.css'

interface PropTypes {
  title: string
  to: string
  openInNewWindow?: boolean
  className?: string
  onClick: () => void
  iconLeft?: React.ReactElement
}

const DropdownMobileItem = ({
  className,
  to,
  title,
  openInNewWindow = false,
  onClick,
  iconLeft
}: PropTypes) => (
  <div className={cn(styles.dropdownMobileItem, className && className)}>
    <Button
      iconLeft={iconLeft}
      to={to}
      style={'link'}
      openInNewWindow={openInNewWindow}
      sideEffect={onClick}
    >
      {title}
    </Button>
  </div>
)

export default DropdownMobileItem
