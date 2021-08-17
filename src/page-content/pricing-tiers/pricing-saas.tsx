import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as PricingProps } from '../../components/layouts/pricing/pricing'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)

export const pricingSaas: Pick<PricingProps, 'saas'> = {
  saas: [
    {
      theme: 'dark',
      title: 'Early Access',
      description: 'Get early access to the full Ory platform now',
      price: '$99',
      priceDescription: 'per Project/Member',
      button: (
        <Button to={'https://console.ory.sh/registration'} style={'filled'}>
          Sign Up
        </Button>
      ),
      features: [
        {
          icon: CheckCircle,
          title: 'Flexible identity model *'
        },
        {
          icon: CheckCircle,
          title: '1 Member & Project'
        },
        {
          icon: CheckCircle,
          title: '100k API Calls / 24 hours'
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
          title: 'Community Support'
        }
      ]
    },
    {
      theme: 'light',
      title: 'Enterprise',
      description: 'Ory with dedicated support & custom hosting options',
      price: 'Individual',
      priceDescription: 'per Project/Member',
      button: (
        <Button to={'mailto:sales@ory.sh'} style={'outlined'}>
          Contact sales
        </Button>
      ),
      features: [
        {
          icon: CheckCircle,
          title: 'Flexible identity model *'
        },
        {
          icon: CheckCircle,
          title: '>1 Member & Project'
        },
        {
          icon: CheckCircle,
          title: 'No limits on API calls'
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
          title: 'HyperCare Support'
        }
      ]
    }
  ]
}
