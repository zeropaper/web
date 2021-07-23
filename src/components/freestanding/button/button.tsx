import cn from 'classnames'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

import { ParseCase } from '../../../util'

import { pl8, pr8 } from '../utils/padding.module.css'
import * as styles from './button.module.css'

export interface PropTypes {
  children?: React.ReactNode
  className?: string
  style: 'filled' | 'outlined' | 'text' | 'none' | 'link' | 'link-inline'
  theme?: 'light' | 'dark' | 'grey'
  to: string | (() => void)
  openInNewWindow?: boolean
  disabled?: boolean
  iconRight?: React.ReactElement
  iconLeft?: React.ReactElement
}

const buttonVariants = ['filled', 'outlined', 'text']
const linkVariants = ['link', 'link-inline']

const Button = ({
  children,
  className,
  style = 'filled',
  theme = 'light',
  to,
  openInNewWindow = false,
  disabled = false,
  iconRight,
  iconLeft
}: PropTypes) => {
  const getStyle = (style: string, theme: string): string => {
    // @ts-ignore
    return styles[`style${ParseCase(style)}${ParseCase(theme)}`]
  }

  const classes = cn(className, {
    [getStyle(style, theme)]: style !== 'none',
    'font-link': style === 'link',
    'font-button': buttonVariants.includes(style),
    [styles.btnBase]: buttonVariants.includes(style),
    [styles.disabled]: disabled
  })

  const content = (
    <>
      {iconLeft && (
        <span className={cn(pr8, styles.btnTextContainer)}>{iconLeft}</span>
      )}
      <span className={cn(styles.btnTextContainer)}>{children}</span>
      {iconRight && (
        <span className={cn(pl8, styles.btnTextContainer)}>{iconRight}</span>
      )}
    </>
  )

  if (typeof to === 'string') {
    return to.startsWith('/') && to.indexOf('/docs/') < 0 ? (
      <GatsbyLink
        to={to}
        className={classes}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        target={openInNewWindow ? '_blank' : ''}
      >
        {content}
      </GatsbyLink>
    ) : (
      <a
        href={to}
        className={classes}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        target={openInNewWindow ? '_blank' : ''}
      >
        {content}
      </a>
    )
  } else {
    return (
      <a className={classes} onClick={to}>
        {content}
      </a>
    )
  }
}

export default Button
