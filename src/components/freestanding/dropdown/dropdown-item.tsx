import cn from 'classnames'
import React from 'react'

import Button from '../button/button'

import * as styles from './dropdown-item.module.css'

export interface DropdownItem {
  title: string
  to: string
  openInNewWindow?: boolean
  description?: string
  className?: string
  onClick: () => void
  iconLeft?: React.ReactElement
}

const DropdownItem = ({
  className,
  to,
  title,
  openInNewWindow = false,
  description,
  onClick,
  iconLeft
}: DropdownItem) => (
  <div className={cn(styles.dropdownItem, className && className)}>
    <Button
      iconLeft={iconLeft}
      to={to}
      style={'link'}
      openInNewWindow={openInNewWindow}
      sideEffect={onClick}
    >
      <div>
        {title}
        <p className={cn('font-p-smaller')}>{description}</p>
      </div>
    </Button>
  </div>
)

export default DropdownItem
