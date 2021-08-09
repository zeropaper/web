import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as PricingProps } from '../../components/layouts/pricing/pricing'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)

export const pricingOpensource: Pick<PricingProps, 'opensource'> = {
  opensource: [
    {
      theme: 'light',
      title: 'Self-hosted',
      description:
        'Try out Ory locally or deploy self-hosted without any limits.',
      price: 'Free',
      priceDescription: '',
      button: (
        <Button to={'/docs/'} style={'filled'}>
          Get Started
        </Button>
      ),
      featuresContainer: 'row',
      features: [
        {
          icon: CheckCircle,
          title: 'No Limits'
        },
        {
          icon: CheckCircle,
          title: 'Self-hosted'
        },
        {
          icon: CheckCircle,
          title: 'Write your own UI'
        },
        {
          icon: CheckCircle,
          title: 'Community Support'
        }
      ]
    }
  ]
}
