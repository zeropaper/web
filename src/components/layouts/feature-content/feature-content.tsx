import cn from 'classnames'
import React, { useState } from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'

import {
  pb128,
  pb24,
  pb32,
  pb48,
  pb8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './feature-content.module.css'

export interface PropTypes {
  id: string
  background?: 'dark' | 'grey' | 'light-grey' | 'themed'
  slant?: boolean
  title: React.ReactElement
  overline: string | React.ReactElement
  description: React.ReactElement
  content: React.ReactElement
  button?: ContentCTA
  feature?: Feat
}

interface ContentCTA {
  ctaTitle: string
  to: string
  openInNewWindow?: boolean
  iconRight?: React.ReactElement
  className?: string
}

interface Feat {
  title: React.ReactElement
  description: React.ReactElement
  features: Array<Features>
}

interface Features {
  title: React.ReactElement
  description: React.ReactElement
}

const FeatureContent = ({
  id,
  slant,
  background,
  title,
  overline,
  description,
  content,
  button,
  feature
}: PropTypes) => (
  <div
    id={id}
    className={cn(
      styles.featureContent,
      {
        ['background-is-grey']: background === 'grey',
        ['background-is-dark']: background === 'dark',
        ['background-is-light-grey']: background === 'light-grey',
        ['background-is-themed']: background === 'themed'
      },
      { ['is-slanted-top-larger']: slant === true }
    )}
  >
    <Container className={feature && pb128} fluid={true} alignItems={'center'}>
      <Grid className={pb32} lg={4} md={5} sm={12} xs={12}>
        <h1 className={cn('font-overline', pb24)}>
          <span
            className={cn({ ['is-themed-primary']: background !== 'themed' })}
          >
            &gt;{' '}
          </span>
          {overline}
        </h1>
        <h2 className={cn('font-h1', pb32)}>{title}</h2>
        <p className={cn('font-p-large', pb24)}>{description}</p>
        {button && (
          <Container>
            <Button
              className={cn(button.className && button.className)}
              style={'link'}
              iconRight={button.iconRight}
              openInNewWindow={button.openInNewWindow}
              to={button.to}
            >
              {button.ctaTitle}
            </Button>
          </Container>
        )}
      </Grid>
      <Grid lg={6} md={7} sm={12} xs={12}>
        <Container>{content}</Container>
      </Grid>
    </Container>
    <Container fluid={true} alignItems={'start'}>
      {feature && (
        <>
          <Grid lg={4} md={3} sm={12} xs={12} className={pb48}>
            <ContentText>
              <h3 className={cn('font-h3', pb32)}>{feature.title}</h3>
              <p className={cn('font-p-large')}>{feature.description}</p>
            </ContentText>
          </Grid>
          <Grid lg={6} md={8} sm={12} xs={12}>
            <Container alignItems={'start'}>
              {feature.features.map((features, index) => (
                <Grid
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  className={cn(pb48, styles.featuresContent)}
                  key={index}
                >
                  <Container flexContainer={'row'} alignItems={'start'}>
                    <h4 className={cn('font-h6', 'is-mute-text', pb8)}>
                      <span className={cn('is-themed-primary', 'is-monospace')}>
                        &gt;{' '}
                      </span>
                      {features.title}
                    </h4>
                    <p className={cn('font-p-small', pb8)}>
                      {features.description}
                    </p>
                  </Container>
                </Grid>
              ))}
            </Container>
          </Grid>
        </>
      )}
    </Container>
  </div>
)

export default FeatureContent
