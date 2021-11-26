import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import PricingBlock from './sub-components/pricing-block'
import { PriceTier } from './sub-components/pricing-tier'

import { pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './pricing.module.css'

export interface PropTypes {
  id: string
  className?: string
  title: React.ReactElement | string
  description?: React.ReactElement
  cloud: Array<PriceTier>
  notices: Array<Notice>
}

interface Notice {
  notice: string | React.ReactElement
}

const Pricing = ({ id, title, cloud, notices }: PropTypes) => {
  return (
    <div id={id} className={cn(styles.pricing)}>
      <Container fluid={true} justify={'center'} alignItems={'start'}>
        <Container justify={'center'} className={cn('text-is-centered', pb32)}>
          <h1 className={cn('font-h1', pb32)}>{title}</h1>
        </Container>
        <PricingBlock tiers={cloud} />
        <Container justify={'center'}>
          <Grid lg={8} md={8} sm={12} xs={12}>
            <Container justify={'center'} className={'text-is-centered'}>
              {notices.map(({ notice }: Notice, index) => {
                return (
                  <div key={index}>
                    <p className={cn('font-p-small')}>
                      <span className={cn('is-themed-primary', 'is-semibold')}>
                        <sup>{index + 1} </sup>
                      </span>
                      {notice}
                    </p>
                  </div>
                )
              })}
            </Container>
          </Grid>
        </Container>
      </Container>
    </div>
  )
}

export default Pricing
