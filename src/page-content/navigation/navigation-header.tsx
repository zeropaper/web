import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as NavProps } from '../../components/layouts/navigation/navigation'

const Cloud = <i className="ph-rainbow-cloud themed-primary size24" />
const OpenSource = <i className="ph-app-window themed-primary size24" />
const Kratos = <i className="ph-user-gear themed-primary size24" />
const Hydra = <i className="ph-fingerprint themed-primary size24" />
const Oathkeeper = <i className="ph-shield-warning themed-primary size24" />
const Keto = <i className="ph-key themed-primary size24" />

const Community = <i className="ph-users-three themed-primary size24" />
const Blog = <i className="ph-newspaper themed-primary size24" />
const GitHub = <i className="ph-github-logo themed-primary size24" />

const About = <i className="ph-info themed-primary size24" />
const Contact = <i className="ph-paper-plane-tilt themed-primary size24" />
const Report = <i className="ph-book-open themed-primary size24" />

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
      Request Access
    </Button>
  ]
}

export const dropdownMenu: Pick<NavProps, 'dropdownMenu'> = {
  dropdownMenu: [
    {
      title: 'Product',
      mainMenu: [
        {
          iconLeft: Cloud,
          title: 'Ory Cloud',
          description: 'Never Build Auth Again',
          to: 'https://console.ory.sh/registration'
        },
        {
          iconLeft: OpenSource,
          title: 'Open Source Ecosystem',
          description: "Ory's heart is Open Source",
          to: '/open-source'
        },
        {
          iconLeft: Kratos,
          title: 'Kratos',
          description: 'Identity & User Management',
          to: '/kratos'
        },
        {
          iconLeft: Hydra,
          title: 'Hydra',
          description: 'OAuth 2.0 & OpenIDConnect',
          to: '/hydra'
        },
        {
          iconLeft: Keto,
          title: 'Keto',
          description: 'Global Authorization Server',
          to: '/keto'
        },
        {
          iconLeft: Oathkeeper,
          title: 'Oathkeeper',
          description: 'Zero Trust Networking',
          to: '/oathkeeper'
        }
      ]
    },
    {
      title: 'Developers',
      mainMenu: [
        {
          iconLeft: Community,
          title: 'Community',
          description: 'Be a part of the Ory Community',
          to: '/community'
        },
        {
          iconLeft: Blog,
          title: 'Blog',
          description: 'Articles & Guides',
          to: '/blog'
        },
        {
          iconLeft: GitHub,
          title: 'GitHub',
          description: 'Participate in Development',
          to: 'https://github.com/ory',
          openInNewWindow: true
        }
      ]
    },
    {
      title: (
        <Button to={'/pricing'} style={'link'}>
          Pricing
        </Button>
      )
    },
    {
      title: (
        <Button to={'/docs/'} style={'link'}>
          Docs
        </Button>
      )
    },
    {
      title: 'About',
      mainMenu: [
        {
          iconLeft: About,
          title: 'About Us',
          to: '/about'
        },
        {
          iconLeft: Contact,
          title: 'Contact Us',
          to: 'mailto:office@ory.sh'
        },
        {
          iconLeft: Report,
          title: 'Identity Report',
          to: '/identity-in-modern-applications-oreilly'
        }
      ]
    },
    {
      title: (
        <Button to={'/jobs'} style={'link'}>
          Jobs
        </Button>
      )
    }
  ]
}

export const mobileMenu: Pick<NavProps, 'mobileMenu'> = {
  mobileMenu: {
    mobileMenuCategories: [
      {
        category: 'Product',
        mobileMenuItems: [
          {
            title: 'Ory Cloud',
            to: 'https://console.ory.sh/registration'
          },
          {
            title: 'Pricing',
            to: '/pricing'
          },
          {
            title: 'Open Source',
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
          }
        ]
      },
      {
        category: 'Developers',
        mobileMenuItems: [
          {
            title: 'Docs',
            to: '/docs/'
          },
          {
            title: 'Community',
            to: '/community'
          },
          {
            title: 'Blog',
            to: '/blog'
          },
          {
            title: 'GitHub',
            to: 'https://github.com/ory',
            openInNewWindow: true
          }
        ]
      },
      {
        category: 'About',
        mobileMenuItems: [
          {
            title: 'Jobs',
            to: '/jobs'
          },
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
      }
    ]
  }
}
