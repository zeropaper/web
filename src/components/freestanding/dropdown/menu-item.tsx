import cn from 'classnames'
import React from 'react'

import Button from '../button/button'

import { menuItem, menuButton } from './menu-item.module.css'

interface PropType {
  title: string | React.ReactElement
  children?: React.ReactElement
  className?: string
  onClick: () => void
}

const MenuItem = ({ className, title, onClick, children }: PropType) => (
  <div>
    <li aria-haspopup="true" className={cn(menuItem, className && className)}>
      {typeof title === 'string' ? (
        <>
          <Button to={onClick} className={cn(menuButton)} style={'navigation'}>
            {title}
          </Button>

          {children}
        </>
      ) : (
        <div onClick={onClick}>{title}</div>
      )}
    </li>
  </div>
)

export default MenuItem
