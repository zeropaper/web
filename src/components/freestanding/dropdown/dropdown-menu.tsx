import cn from 'classnames'
import React, { forwardRef } from 'react'

import { dropdownMenu, dropdownMenuHide } from './dropdown-menu.module.css'

interface PropTypes {
  children: React.ReactNode
  show: boolean
  className?: string
}

const DropdownMenu = forwardRef(
  ({ className, show, children }: PropTypes, ref: any) => (
    <div
      ref={ref}
      aria-label={'submenu'}
      className={cn(
        dropdownMenu,
        !show && dropdownMenuHide,
        className && className
      )}
    >
      {children}
    </div>
  )
)

export default DropdownMenu
