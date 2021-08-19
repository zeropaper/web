import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as NavProps } from '../../components/layouts/navigation/navigation'

const Cloud = <i className="ph-rainbow-cloud themed-primary size24" />
const Pricing = <i className="ph-coffee themed-primary size24" />
const OpenSource = <i className="ph-app-window themed-primary size24" />
const Kratos = <i className="ph-user-gear themed-primary size24" />
const Hydra = <i className="ph-fingerprint themed-primary size24" />
const Oathkeeper = <i className="ph-shield-warning themed-primary size24" />
const Keto = <i className="ph-key themed-primary size24" />

const Documentation = <i className="ph-file-text themed-primary size24" />
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
          iconLeft: Cloud,
          title: 'Sign Up',
          description: 'Become an Ory Insider',
          to: 'https://console.ory.sh/registration'
        },
        {
          iconLeft: Pricing,
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
          iconLeft: OpenSource,
          title: 'Overview',
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
      title: 'Developers',
      mainMenu: [
        {
          iconLeft: Documentation,
          title: 'Documentation',
          description: 'Documentation for all Ory products.',
          to: '/docs'
        },
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
        }
      ]
    },
    {
      title: 'Company',
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
            title: 'Identity Report',
            to: '/identity-in-modern-applications-oreilly/'
          }
        ]
      },
      {
        category: 'Contact',
        mobileMenuItems: [
          {
            title: 'Contact Us',
            to: 'mailto:office@ory.sh'
          }
        ]
      }
    ]
  }
}
