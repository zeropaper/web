import cn from 'classnames'
import React, { useState } from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import Toggle from '../../freestanding/toggle/toggle'

import PricingBlock from './sub-components/pricing-block'
import { PriceTier } from './sub-components/pricing-tier'

import { pb32, pr24 } from '../../freestanding/utils/padding.module.css'
import * as styles from './pricing.module.css'

export interface PropTypes {
  id: string
  className?: string
  title: React.ReactElement
  description?: React.ReactElement
  cloud: Array<PriceTier>
  opensource: Array<PriceTier>
}

const Pricing = ({ id, title, description, cloud, opensource }: PropTypes) => {
  const [togglePricing, setTogglePricing] = useState<boolean>(true)

  const handleToggle = () => {
    setTogglePricing(!togglePricing)
  }

  return (
    <div id={id} className={cn(styles.pricing)}>
      <Container fluid={true} justify={'center'} alignItems={'start'}>
        <Grid lg={6} md={8} sm={12} xs={12} className={styles.title}>
          <Container
            justify={'center'}
            className={cn('text-is-centered', pb32)}
          >
            <h1 className={cn('font-h1', pb32)}>{title}</h1>
            <p className={cn('font-p-large', pb32)}>{description}</p>
          </Container>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12} className={styles.title}>
          <Container justify={'center'}>
            <Toggle
              className={cn(pb32, pr24)}
              onClick={handleToggle}
              enabled={togglePricing}
              text={{ textEnable: 'Self-hosted', textDisable: 'Cloud' }}
            />
          </Container>
        </Grid>
        {togglePricing ? (
          <PricingBlock tiers={cloud} />
        ) : (
          <PricingBlock tiers={opensource} />
        )}
        <Container justify={'center'}>
          <Grid lg={8} md={8} sm={12} xs={12}>
            <Container justify={'center'} className={'text-is-centered'}>
              <p className={cn('font-p-small')}>
                <span className={'is-themed-primary'}>*</span>Upgrade
                to production plan possible, please contact us. Paid plans have no limits on identities. 
              </p>
              <p className={cn('font-p-small')}>
                Prices in USD, taxes may apply. Billed monthly.
              </p>
            </Container>
          </Grid>
        </Container>
      </Container>
    </div>
  )
}

export default Pricing
