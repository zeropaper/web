import React from 'react'

import Button from '../../freestanding/button/button'

import { PropTypes } from './pricing'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)

export const pricingDefault: Pick<PropTypes, 'title' | 'description'> = {
  title: <>No limits on identity</>,
  description: (
    <>
      Ory is based on mature open source software and open standards. And it’s
      affordable for everyone. We also offer individual plans for enterprise
      customers, please contact us to learn more!
    </>
  )
}

export const pricingTiersSaas: Pick<PropTypes, 'saas'> = {
  saas: [
    {
      theme: 'dark',
      title: 'Early Access',
      description: 'Get early access to the full Ory platform now',
      price: '$99',
      priceDescription: 'per Project/Member',
      button: (
        <Button to={'https://console.ory.sh/registration'} style={'filled'}>
          Request Access
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

export const pricingTiersOpenSource: Pick<PropTypes, 'opensource'> = {
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
