import cn from 'classnames'
import React from 'react'

import Container from '../../../freestanding/containers/container'
import Grid from '../../../freestanding/containers/grid'

import PricingTier, { PriceTier } from './pricing-tier'

import { pb32 } from '../../../freestanding/utils/padding.module.css'
import * as styles from '../pricing.module.css'

interface PropTypes {
  className?: string
  tiers: Array<PriceTier>
}

const PricingBlock = ({ className, tiers }: PropTypes) => {
  return (
    <div className={cn(className && className)}>
      <Container className={pb32} justify={'center'} alignItems={'center'}>
        {tiers.length > 1
          ? tiers.map((tier, index) => {
              return (
                <Grid
                  className={cn(styles.pricingblock, pb32)}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  key={index}
                >
                  <PricingTier tier={tier} />
                </Grid>
              )
            })
          : tiers.length > 0 && <PricingTier tier={tiers[0]} />}
      </Container>
    </div>
  )
}

export default PricingBlock
