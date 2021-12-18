import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import CodeBox, {
  Languages,
  PropTypes as CodeBoxProps
} from '../components/freestanding/codebox/codebox'
import { PropTypes as CodingProps } from '../components/layouts/coding/coding'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as ProjectListProps } from '../components/layouts/projects/projects-list'
import { PropTypes as QuickstartProps } from '../components/layouts/quickstart/quickstart'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'
import {PropTypes as HeroImageProps} from "../components/layouts/hero/hero-image";
import Cloud from "../images/illustrations/hero.png";

const ArrowRight = <i className="ph-arrow-right-bold size16" />
const Terminal = <i className="ph-terminal-fill size32" />
const GitMerge = <i className="ph-git-merge-fill size32" />

export const seo: SeoProps = {
  description:
    'Ory is a certified and battle-tested identity solution backed by a large open source community and trusted by Fortune500.',
  title: 'Ory - Open Source Identity Solutions For Everyone',
  keywords:
    'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
}

export const hero_alt: HeroImageProps = {
  id: 'index.hero',
  title: (
    <>
      <span className={'is-themed-primary'}> Ory </span> Cloud 
    </>
  ),
  description:
    "Ory cloud is design for minimal dependencies, low latency, limitless scalebility and a focus on secure networkinfrastructure.",
  buttons: [
    {
      ctaTitle: 'Test Now',
      style: 'filled',
      to: '/kratos/docs/quickstart'
    }
  ],
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Examples of scalable Ory Cloud capabilities and dashboard metrics"
      src={Cloud}
    />
  )
}

export const projectListCloud: ProjectListProps = {
  id: 'opensource.projects',
  title: (
    <>
      <span className={'is-mute-text'}>Fully flexible, </span>fully yours
    </>
  ),
  description: (
    <>
      Rely on secure zero trust, up-to-date and adaptable service that is able to meet all your business needs; 
      regardless of scale, location, use case, programming language, personal experience, stack or other dependencies.
    </>
  ),
  projects: [
    {
      theme: 'kratos',
      title: 'kratos',
      overline: 'Kratos Ory Cloud',
      descriptiveTitle: 'Identity and User Management',
      description:
        'Cloud native user management system. Provision IDs, store user information, configure authentication methods and use a headless API.',
      path: '/kratos',
    },
    {
      theme: 'hydra',
      title: 'hydra',
      overline: 'Hydra coming soon',
      descriptiveTitle: 'OAuth 2.0 and OpenID Connect',
      description:
        'OAuth 2.0 and OpenID Certified® OpenID Connect server. Cloud native, security-first, headless API security for your infrastructure. ',
      path: '/hydra',
    },
    {
      theme: 'oathkeeper',
      title: 'oathkeeper',
      overline: 'Oathkeeper Open Source',
      descriptiveTitle: 'Identity and Access Proxy',
      description:
        'Identity and Access Proxy (IAP). Authenticate, authorize and mutate any incoming traffic, using Zero Trust / BeyondCorp as open source.',
      path: '/oathkeeper',
    },
    {
      theme: 'keto',
      title: 'keto',
      overline: 'Keto Open Source',
      descriptiveTitle: 'Global access control',
      description:
        "Authorization Server inspired by Google's consistent, global Authorization System, providing granular access policies with RBAC, ABAC and ACL.",
      path: '/keto',
    }
  ]
}

export const featureContentCloud: FeatureContentProps = {
  id: 'cloud.featurecontent.cloud',
  slant: true,
  background: 'grey',
  overline: <>Ory Cloud</>,
  title: (
    <>
      <span className={'is-mute-text'}>Fast, scalabe,</span>
      {''} secure
    </>
  ),
  description: (
    <>
      Moving to a new infrastructure is a rare scenario for any business, for Ory it is just another workday.
      Ory Cloud provides a tried and tested migration plan, coupled with extensive onboarding sessions to get you up and running in no time. 
    </>
  ),
  button: {
    ctaTitle: 'Test Now',
    to: 'https://console.ory.sh/registration',
    iconRight: ArrowRight
  },
  content: (
    <StaticImage
      loading="lazy"
      className="responsive"
      alt="Ory Project Dashboard"
      src="../images/illustrations/dashboard.png"
    />
  ),
  feature: {
    title: <>Painless integration</>,
    description: (
      <>
        For larger organizations moving a larger set of systems to a new infrastructure often means a lengthy migration. 
        Ory Cloud is a product built by a focused team, tried and tested by an international community of security experts and organizations.
      </>
    ),
    features: [
      {
        title: <>Built for developers</>,
        description: (
          <>
            We built the API and console we wished we had - make setting up
            identity infrastructure fast and painless.
          </>
        )
      },
      {
        title: <>Open source</>,
        description: (
          <>
            Ory Cloud is based on the largest{' '}
            <Button to={'/open-source'} style={'link-inline'}>
              open source
            </Button>{' '}
             open source ecosystem in the area of authentication, authorization, access control, and zero trust networking in the world.
          </>
        )
      },
      {
        title: <>Fair pricing</>,
        description: (
          <>
            No limits on identities are part of all{' '}
            <Button to={'/pricing'} style={'link-inline'}>
              paid plans
            </Button>{' '}
            - pay for what you use.
          </>
        )
      },
      {
        title: <>Security not optional</>,
        description: (
          <>
            Essential security included, dont pay extra for vital security
            features like MFA. 
          </>
        )
      }
    ]
  }
}

export const featureContentUX: FeatureContentProps = {
  id: 'cloud.featurecontent.ux',
  slant: true,
  background: 'dark',
  overline: 'Bring your own UI',
  title: (
    <>
      <span className={'is-mute-text'}>Take back</span> control
    </>
  ),
  description: (
    <>
      Ory Cloud is built for maximum adaptability - use your styles and design,
      identity schemas and UX flows. Ory Cloud is flexible and can be adapted to
      your needs.
    </>
  ),
  button: {
    ctaTitle: 'Sign up',
    to: 'https://console.ory.sh',
    iconRight: ArrowRight
  },
  content: (
    <StaticImage
      loading="lazy"
      className="responsive"
      alt="Individual styling on user interfaces"
      src="../images/illustrations/examplelogin.png"
    />
  )
}

export const codingCodeBox: CodeBoxProps = {
  tabs: [
    {
      filename: '',
      language: Languages.Shell,
      code: `$ export ORY_ACCESS_TOKEN=RaEEZfMbx7QGuf0uWNt9c15NE4FG4
$ ory identities list --project playground 
--format json-pretty  
[
  {
    "id": "7c7d040d-97f6-4a57-95e8-08c61e6df016",
    "schema_id": "default",
    "schema_url": "https://custom.domain.com/api/
    kratos/public/schemas/default",
    "traits": {
      "email": "alice@example.com"
    }
  },
    {
    "id": "7f6d040d-97c7-4a59-85e7-6df01608c61e",
    "schema_id": "default",
    "schema_url": "https://custom.domain.com/api/
    kratos/public/schemas/default",
    "traits": {
      "email": "stephan@example.com"
    }
  }
]`
    }
  ]
}

export const coding: CodingProps = {
  id: 'cloud.coding',
  slant: true,
  background: 'light-grey',
  overline: 'Modern tooling',
  title: (
    <>
      <span className={'is-mute-text'}>All about</span>
      {''} developer experience
    </>
  ),
  description: (
    <>
      SDKs for any language, clear documentation, tutorials, and community
      support are our standards. Our open source approach also means you get to
      participate in API and architecture discussions - and influence the
      roadmap.
    </>
  ),
  button: {
    ctaTitle: 'Visit the documentation',
    to: '/docs/get-started',
    iconRight: ArrowRight
  },
  additional: {
    title: <>The CLI to get things done</>,
    description: (
      <>
        We love working from the CLI - so we built one for Ory that you will
        love too.
      </>
    ),
    button: {
      ctaTitle: 'Install the CLI',
      to: '/docs/get-started',
      iconRight: ArrowRight
    }
  },
  codebox: <CodeBox {...codingCodeBox} />,
  content: [
    {
      icon: Terminal,
      title: <>Powerful tools</>,
      description: (
        <>
          Ory ships REST APIs, gRPC APIs, SDKs, and CLIs for all operating
          systems and CPUs.
        </>
      ),
      button: (
        <Button
          to={'/docs/guides/ory-cli-install-use'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Install the CLI
        </Button>
      )
    },
    {
      icon: GitMerge,
      title: <>Based on Open Source</>,
      description: (
        <>Participate in discussions, feature requests, and PRs on GitHub.</>
      ),
      button: (
        <Button
          to={'https://github.com/ory/'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Star us on GitHub
        </Button>
      )
    }
  ]
}

export const quickstart: QuickstartProps = {
  id: 'cloud.quickstart',
  background: 'light-grey',
  slant: true,
  title: (
    <>
      Power up <span className={'is-mute-text'}>your stack</span>
    </>
  ),
  description: (
    <>
      Get started right away and explore Ory Cloud, or contact us for a custom
      support package that's tailor-made for you.
    </>
  ),
  buttons: [
    {
      ctaTitle: 'Sign up',
      style: 'filled',
      to: 'https://console.ory.sh/registration'
    },
    {
      ctaTitle: 'Contact',
      style: 'outlined',
      to: 'mailto:sales@ory.sh'
    }
  ],
  content: [
    {
      title: <>Delightful Docs</>,
      description: (
        <>
          Breeze through technical concepts, level up with our tutorials or
          master our extensive API reference.
        </>
      ),
      button: (
        <Button to={'/docs/'} style={'link'} iconRight={ArrowRight}>
          Visit the documentation
        </Button>
      )
    },
    {
      title: <>A helpful community</>,
      description: (
        <>
          Chat with peers, discuss code and gain insights from the open source
          at the heart of Ory.
        </>
      ),
      button: (
        <Button
          to={'https://slack.ory.sh'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Join the chat on Slack
        </Button>
      )
    }
  ]
}
