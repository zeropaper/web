import cn from 'classnames'
import React from 'react'

import Button from '../../../freestanding/button/button'
import Container from '../../../freestanding/containers/container'

import {
  pb16,
  pb32,
  pb8,
  pr8
} from '../../../freestanding/utils/padding.module.css'
import * as styles from './pricing-tier.module.css'

export interface PriceFeature {
  icon: React.ReactElement
  title: string | React.ReactElement
}

export interface PriceTier {
  theme: 'light' | 'dark' | 'themed'
  title: string | React.ReactElement
  description: string
  price: string
  priceIsBilledMonthly?: boolean
  priceIsMonetary?: boolean
  priceDescription?: string | React.ReactElement
  button: PriceButton
  features: Array<PriceFeature>
}

interface PriceTierFeatures {
  features: Array<PriceFeature>
  classes: Theme
}

interface PriceButton {
  title: string
  to: string
  openInNewWindow?: boolean
  style?: 'filled' | 'outlined'
  className?: string
}

interface PriceTierContent {
  title: string | React.ReactElement
  description: string
  price: string
  priceIsBilledMonthly?: boolean
  priceIsMonetary?: boolean
  priceDescription?: string | React.ReactElement
  button: PriceButton
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
  priceIsBilledMonthly,
  priceIsMonetary,
  priceDescription,
  button,
  classes
}: PriceTierContent) => {
  button.style = button.style || 'filled'

  return (
    <Container
      flexContainer={'column'}
      alignItems={'center'}
      className={cn(styles.tierContent, 'width')}
    >
      <Container
        flexContainer={'column'}
        alignItems={'center'}
        justify={'center'}
        className={cn('text-is-centered', styles.tierTitleContainer)}
      >
        <h2 className={cn('font-h4')}>{title}</h2>
        <p className={cn('font-p-small', 'lineheight-is-tight')}>
          {description}
        </p>
      </Container>
      <Container
        flexContainer={'column'}
        alignItems={'center'}
        justify={'end'}
        className={cn(pb32, 'text-is-centered', styles.tierPriceContainer)}
      >
        {price.length >= 6 ? (
          <h3 className={cn('font-h3', pb8)}>
            {price}
            {priceIsBilledMonthly && (
              <span className={cn('font-h4')}> / mo</span>
            )}
          </h3>
        ) : (
          <h3 className={cn('font-h1', pb8)}>
            {priceIsMonetary && (
              <span className={cn('font-h2')}>
                <sup>$ </sup>
              </span>
            )}
            {price}
            {priceIsBilledMonthly && (
              <span className={cn('font-h4')}> / mo</span>
            )}
          </h3>
        )}
        {priceDescription ? (
          <p className={cn(classes.fontpsm, 'lineheight-is-tight')}>
            {priceDescription}
          </p>
        ) : null}
      </Container>
      <Container className={cn('width')}>
        <Button
          to={button.to}
          style={button.style}
          openInNewWindow={button.openInNewWindow}
          className={cn('width', button.className)}
        >
          {button.title}
        </Button>
      </Container>
    </Container>
  )
}

const PricingFeatures = ({ features }: PriceTierFeatures) => (
  <Container
    flexContainer={'column'}
    alignItems={'start'}
    justify={'start'}
    className={cn(pb8, styles.tierFeaturesContainer, 'width')}
  >
    {features.map((feature, index) => {
      return (
        <Container justify={'start'} alignItems={'center'} key={index}>
          <Container className={cn(pr8)}>{feature.icon}</Container>
          <p className={cn('font-p-small', 'is-medium', 'is-primary-text')}>
            {feature.title}
          </p>
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
    priceIsBilledMonthly,
    priceIsMonetary,
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
    if (theme === 'themed') {
      classes = {
        text: 'background-is-themed',
        fonth1: 'font-h1',
        fonth3: 'font-h3',
        fontp: 'font-p',
        fontp2: 'font-p',
        fontpsm: 'font-p-small',
        background: styles.tierThemed
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
  }
  return (
    <Container
      justify={'start'}
      alignItems={'start'}
      className={cn(
        classes.background,
        classes.text,
        styles.pricingTier,
        'width',
        className && className
      )}
    >
      <PricingContent
        classes={classes}
        title={title}
        description={description}
        price={price}
        priceIsBilledMonthly={priceIsBilledMonthly}
        priceIsMonetary={priceIsMonetary}
        priceDescription={priceDescription}
        button={button}
      />
      <PricingFeatures classes={classes} features={features} />
    </Container>
  )
}

export default PricingTier
