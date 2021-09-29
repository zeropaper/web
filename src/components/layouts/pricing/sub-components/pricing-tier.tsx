import cn from 'classnames'
import React from 'react'

import Container from '../../../freestanding/containers/container'
import Grid from '../../../freestanding/containers/grid'
import ContentText from '../../../freestanding/content/content-text'
import Molecule from '../../../freestanding/molecule/molecule'

import {
  pb16,
  pb48,
  pb64,
  pr8
} from '../../../freestanding/utils/padding.module.css'
import * as styles from './pricing-tier.module.css'

export interface PriceFeature {
  icon: React.ReactElement
  title: string
}

export interface PriceTier {
  theme: 'light' | 'dark'
  title: string | React.ReactElement
  description: string
  price: string
  priceDescription: string
  button: React.ReactElement
  featuresContainer?: 'column' | 'row'
  features: Array<PriceFeature>
}

interface PriceTierFeatures {
  features: Array<PriceFeature>
  classes: Theme
}

interface PriceTierContent {
  title: string | React.ReactElement
  description: string
  price: string
  priceDescription: string
  button: React.ReactElement
  classes: Theme
}

interface PropTypes {
  className?: string
  tier: PriceTier
}

interface Theme {
  text?: string
  fonth1: string
  fonth3: string
  fontp: string
  fontp2: string
  fontpsm: string
  background: string
}

const PricingContent = ({
  title,
  description,
  price,
  priceDescription,
  button,
  classes
}: PriceTierContent) => (
  <>
    <Container flexContainer={'column'} alignItems={'start'}>
      <ContentText className={cn(pb48)}>
        <Molecule>
          <h2 className={cn('font-h3', 'is-monospace', pb16)}>{title}</h2>
          <p className={cn('font-p')}>{description}</p>
        </Molecule>
      </ContentText>
      <ContentText className={cn(pb48)}>
        <Molecule>
          <h3 className={cn(classes.fonth1)}>{price}</h3>
          <p className={cn(classes.fontpsm)}>{priceDescription}</p>
        </Molecule>
      </ContentText>
      <div className={cn(pb64)}>{button}</div>
    </Container>
  </>
)

const PricingFeatures = ({ features, classes }: PriceTierFeatures) => (
  <Container flexContainer={'column'} alignItems={'start'}>
    {features.map((feature) => {
      return (
        <Container justify={'start'} alignItems={'center'} key={feature.title}>
          <div className={cn(pr8)}>{feature.icon}</div>
          <p className={cn(classes.fontp2)}>{feature.title}</p>
        </Container>
      )
    })}
  </Container>
)

const PricingTier = ({
  className,
  tier: {
    theme = 'light',
    title,
    description,
    price,
    priceDescription,
    button,
    features
  }
}: PropTypes) => {
  let classes: Theme

  if (theme === 'light') {
    classes = {
      fonth1: 'font-h1',
      fonth3: 'font-h3',
      fontp: 'font-p',
      fontp2: 'font-p',
      fontpsm: 'font-p-small',
      background: styles.tierLight
    }
  } else {
    classes = {
      text: 'background-is-dark',
      fonth1: 'font-h1',
      fonth3: 'font-h3',
      fontp: 'font-p',
      fontp2: 'font-p',
      fontpsm: 'font-p-small',
      background: styles.tierDark
    }
  }

  return (
    <div
      className={cn(classes.background, classes.text, className && className)}
    >
      <Container justify={'start'} alignItems={'stretch'}>
        <>
          <Grid lg={6} md={12} sm={12} xs={12}>
            <PricingContent
              classes={classes}
              title={title}
              description={description}
              price={price}
              priceDescription={priceDescription}
              button={button}
            />
          </Grid>
          <Grid lg={6} md={12} sm={12} xs={12}>
            <Container justify={'start'} alignItems={'start'}>
              <PricingFeatures classes={classes} features={features} />
            </Container>
          </Grid>
        </>
      </Container>
    </div>
  )
}

export default PricingTier
