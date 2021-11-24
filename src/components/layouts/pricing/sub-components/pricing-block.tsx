import cn from 'classnames'
import React from 'react'

import Container from '../../../freestanding/containers/container'
import Grid from '../../../freestanding/containers/grid'

import PricingTier, { PriceTier } from './pricing-tier'

import { pb32 } from '../../../freestanding/utils/padding.module.css'
import * as styles from '../pricing.module.css'
import { pricingTier } from './pricing-tier.module.css'

interface PropTypes {
  className?: string
  tiers: Array<PriceTier>
}

const PricingBlock = ({ className, tiers }: PropTypes) => {
  return (
      <Container className={cn(pb32, className && className)} justify={'center'} alignItems={'start'}>
        {tiers.map((tier, index) => {
              return (
                <Grid
                  className={cn(styles.pricingblock, pricingTier ,pb32)}
                  lg={3}
                  md={6}
                  sm={12}
                  xs={12}
                  key={index}
                >
                  <PricingTier tier={tier} />
                </Grid>
              )
            })}
      </Container>
  )
}

export default PricingBlock
