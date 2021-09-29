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
import * as styles from './hero-features.module.css'

export interface PropTypes {
  id: string
  background?: 'dark' | 'grey' | 'light-grey' | 'themed'
  slant?: boolean
  title: string | React.ReactElement
  description?: React.ReactElement
  features: Array<Feature>
  buttons?: Array<HeroCTA>
}

export interface Feature {
  title: string | React.ReactElement
  description: string | React.ReactElement
}

interface HeroCTA {
  ctaTitle: string
  style: 'filled' | 'outlined' | 'text'
  to: string
  openInNewWindow?: boolean
  iconRight?: React.ReactElement
  className?: string
}

const HeroFeatures = ({
  id,
  background,
  slant,
  title,
  description,
  features,
  buttons
}: PropTypes) => (
  <div
    id={id}
    className={cn(
      styles.heroFeatures,
      {
        ['background-is-grey']: background === 'grey',
        ['background-is-dark']: background === 'dark',
        ['background-is-light-grey']: background === 'light-grey',
        ['background-is-themed']: background === 'themed'
      },
      { ['is-slanted-top-medium']: slant === true }
    )}
  >
    <Container fluid={true} alignItems={'start'}>
      <Grid lg={4} md={12} sm={12} xs={12} className={cn(pb64)}>
        <Container className={cn(pb32, styles.title)}>
          <h1 className={cn('font-h1', pb32)}>{title}</h1>
          <p className={cn('font-p-large')}>{description}</p>
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
      <Grid lg={6} md={12} sm={12} xs={12}>
        <Container alignItems={'start'} justify={'start'}>
          {features.map(({ title, description }, index) => (
            <Grid
              lg={6}
              md={6}
              sm={6}
              xs={12}
              className={cn(styles.featuresContent)}
              key={index}
            >
              <Container
                key={index}
                className={cn(pb48, styles.featuresContent)}
                flexContainer={'row'}
                alignItems={'start'}
              >
                <h2 className={cn('font-h5', pb8)}>{title}</h2>
                <p className={cn('font-p-small', pb8)}>{description}</p>
              </Container>
            </Grid>
          ))}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default HeroFeatures
