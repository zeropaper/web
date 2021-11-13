import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as NavProps } from '../../components/layouts/navigation/navigation'

export const sideNav: Pick<NavProps, 'sideNav'> = {
  sideNav: [
    <Button
      to={'https://console.ory.sh/login'}
      style={'outlined'}
      openInNewWindow={false}
    >
      Login
    </Button>,
    <Button
      to={'https://console.ory.sh/registration'}
      style={'filled'}
      openInNewWindow={false}
    >
      Sign Up
    </Button>
  ]
}

export const dropdownMenu: Pick<NavProps, 'dropdownMenu'> = {
  dropdownMenu: [
    {
      title: 'Ory Cloud',
      mainMenu: [
        {
          title: 'Sign Up',
          description: 'Become an Ory Insider',
          to: 'https://console.ory.sh/registration'
        },
        {
          title: 'Pricing',
          description: 'Ory Cloud Pricing',
          to: '/pricing'
        }
      ]
    },
    {
      title: 'Ory Open Source',
      mainMenu: [
        {
          title: 'Overview',
          description: "Ory's heart is Open Source",
          to: '/open-source'
        },
        {
          title: 'Kratos',
          description: 'Identity & User Management',
          to: '/kratos'
        },
        {
          title: 'Hydra',
          description: 'OAuth 2.0 & OpenIDConnect',
          to: '/hydra'
        },
        {
          title: 'Keto',
          description: 'Global Authorization Server',
          to: '/keto'
        },
        {
          title: 'Oathkeeper',
          description: 'Zero Trust Networking',
          to: '/oathkeeper'
        },
        {
          title: 'GitHub',
          description: 'Participate in Development',
          to: 'https://github.com/ory',
          openInNewWindow: true
        }
      ]
    },
    {
      title: 'Developers',
      mainMenu: [
        {
          title: 'Documentation',
          description: 'Documentation for all Ory products',
          to: '/docs'
        },
        {
          title: 'Community',
          description: 'Be a part of the Ory Community',
          to: '/community'
        },
        {
          title: 'Blog',
          description: 'Articles & Guides',
          to: '/blog'
        },
        {
          title: 'Summit',
          description: 'Watch VODs of past Ory Summits',
          to: '/summit/2021'
        }
      ]
    },
    {
      title: 'Company',
      mainMenu: [
        {
          title: 'About Us',
          to: '/about'
        },
        {
          title: 'Contact Us',
          to: 'mailto:office@ory.sh'
        },
        {
          title: 'Identity Report',
          to: '/identity-in-modern-applications-oreilly'
        }
      ]
    },
    {
      title: (
        <Button to={'/jobs'} style={'link'}>
          Jobs
          <span className={'dot'} />
        </Button>
      )
    }
  ]
}

export const mobileMenu: Pick<NavProps, 'mobileMenu'> = {
  mobileMenu: {
    mobileMenuCategories: [
      {
        category: 'Ory Cloud',
        mobileMenuItems: [
          {
            title: 'Sign Up',
            to: 'https://console.ory.sh/registration'
          },
          {
            title: 'Pricing',
            to: '/pricing'
          }
        ]
      },
      {
        category: 'Ory Open Source',
        mobileMenuItems: [
          {
            title: 'Overview',
            to: '/open-source'
          },
          {
            title: 'Kratos',
            to: '/kratos'
          },
          {
            title: 'Hydra',
            to: '/hydra'
          },
          {
            title: 'Keto',
            to: '/keto'
          },
          {
            title: 'Oathkeeper',
            to: '/oathkeeper'
          },
          {
            title: 'GitHub',
            to: 'https://github.com/ory',
            openInNewWindow: true
          }
        ]
      },
      {
        category: 'Developers',
        mobileMenuItems: [
          {
            title: 'Documentation',
            to: '/docs/'
          },
          {
            title: 'Community',
            to: '/community/'
          },
          {
            title: 'Blog',
            to: '/blog/'
          },
          {
            title: 'Summit',
            to: '/summit/2021'
          }
        ]
      },
      {
        category: 'Company',
        mobileMenuItems: [
          {
            title: 'About Us',
            to: '/about/'
          },
          {
            title: 'Jobs',
            to: '/jobs/'
          },
          {
            title: 'Contact Us',
            to: 'mailto:office@ory.sh'
          },
          {
            title: 'Identity Report',
            to: '/identity-in-modern-applications-oreilly/'
          }
        ]
      }
    ]
  }
}
