import cn from 'classnames'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import {
  pb32,
  pb48,
  pb64,
  pb8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './quickstart.module.css'

export interface PropTypes {
  id: string
  background?: 'dark' | 'grey' | 'light-grey' | 'themed'
  slant?: boolean
  title: React.ReactElement
  description: React.ReactElement
  buttons?: Array<QuickstartCTA>
  content: Array<QuickstartContent>
}

export interface QuickstartContent {
  title: React.ReactElement
  description: React.ReactElement
  button?: React.ReactElement
}

interface QuickstartCTA {
  ctaTitle: string
  style: 'filled' | 'outlined' | 'text'
  to: string
  openInNewWindow?: boolean
  iconRight?: React.ReactElement
  className?: string
}

const Quickstart = ({
  id,
  background,
  slant,
  title,
  description,
  buttons,
  content
}: PropTypes) => (
  <div
    id={id}
    className={cn(
      styles.quickstart,
      {
        ['background-is-grey']: background === 'grey',
        ['background-is-dark']: background === 'dark',
        ['background-is-light-grey']: background === 'light-grey',
        ['background-is-themed']: background === 'themed'
      },
      { ['is-slanted-top-large']: slant === true }
    )}
  >
    <Container fluid={true} alignItems={'center'}>
      <Grid lg={4} md={5} sm={12} xs={12} className={cn(pb64)}>
        <Container>
          <h2 className={cn('font-h2', pb32)}>{title}</h2>
          <p className={cn('font-p-large', pb32)}>{description}</p>
        </Container>
        <Container justify={'start'}>
          {buttons &&
            buttons.map(
              (
                { ctaTitle, style, to, openInNewWindow, iconRight, className },
                index
              ) => (
                <Button
                  className={cn('button-group', className)}
                  style={style}
                  key={index}
                  iconRight={iconRight}
                  openInNewWindow={openInNewWindow}
                  to={to}
                >
                  {ctaTitle}
                </Button>
              )
            )}
        </Container>
      </Grid>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <Container alignItems={'start'}>
          {content.map(({ button, description, title }, index) => (
            <Grid
              lg={6}
              md={6}
              sm={6}
              xs={12}
              className={cn(pb48, styles.quickstartContent)}
              key={index}
            >
              <Container flexContainer={'row'} alignItems={'start'}>
                <h4 className={cn('font-h4', pb8)}>{title}</h4>
                <p className={cn('font-p', pb8)}>{description}</p>
                {button}
              </Container>
            </Grid>
          ))}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Quickstart
