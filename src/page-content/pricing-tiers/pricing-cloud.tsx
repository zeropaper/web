import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as PricingProps } from '../../components/layouts/pricing/pricing'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)

export const pricingCloud: Pick<PricingProps, 'cloud'> = {
  cloud: [
    {
      theme: 'dark',
      title: <>Developer</>,
      description: 'Free for developers, no credit card needed',
      price: 'Free',
      priceDescription: 'forever',

      button: (
        <Button to={'https://console.ory.sh/registration'} style={'filled'}>
          Sign Up
        </Button>
      ),
      features: [
        {
          icon: CheckCircle,
          title: 'Login & Registration APIs'
        },
        {
          icon: CheckCircle,
          title: 'UI & Dashboard'
        },
        {
          icon: CheckCircle,
          title: 'Ory CLI'
        },
        {
          icon: CheckCircle,
          title: 'FIDO2-compliant 2FA'
        },
        {
          icon: CheckCircle,
          title: 'Bring your own UI'
        },
        {
          icon: CheckCircle,
          title: 'Custom Identity Models'
        },
        {
          icon: CheckCircle,
          title: 'Production Limits apply*'
        },
        {
          icon: CheckCircle,
          title: 'Community Support'
        }
      ]
    },
    {
      theme: 'light',
      title: 'Enterprise',
      description: 'Large teams and organisations',
      price: 'Custom',
      priceDescription: 'monthly per project',
      button: (
        <Button to={'mailto:sales@ory.sh'} style={'filled'}>
          Contact sales
        </Button>
      ),
      features: [
        {
          icon: CheckCircle,
          title: 'Everything in Developer'
        },
        {
          icon: CheckCircle,
          title: 'More Members & Projects'
        },
        {
          icon: CheckCircle,
          title: 'Unlimited identities'
        },
        {
          icon: CheckCircle,
          title: 'Custom Rate Limit'
        },
        {
          icon: CheckCircle,
          title: 'Support via Ticket System'
        },
        {
          icon: CheckCircle,
          title: 'Support via Voice Calls'
        }
      ]
    }
  ]
}
