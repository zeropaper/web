import React from 'react'

import Button from '../components/freestanding/button/button'
import CodeBox, { Languages } from '../components/freestanding/codebox/codebox'
import { PropTypes as CodeBoxProps } from '../components/freestanding/codebox/codebox'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as FeaturelistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as HeroImageProps } from '../components/layouts/hero/hero-image'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import Kratos from '../images/kratos/kratos.svg'
import KratosSDK from '../images/kratos/kratos_p.svg'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />

export const seo: SeoProps = {
  description: 'Open source user management and identity server.',
  title: 'Ory Kratos - Cloud Native Identity and User Management System'
}

export const hero: HeroImageProps = {
  id: 'kratos.hero',
  title: (
    <>
      Manage identities and users{' '}
      <span className={'is-mute-text'}>in the cloud</span>
    </>
  ),
  description:
    'Headless and configurable authentication and user management, including MFA, social login, custom identities and more.',
  buttons: [
    {
      ctaTitle: 'Get Started',
      style: 'filled',
      to: '/kratos/docs/quickstart'
    }
  ],
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Examples of headless login and registrations forms with different styles using Ory Kratos"
      src={Kratos}
    />
  )
}

export const featureContentCodeBox: CodeBoxProps = {
  tabs: [
    {
      filename: 'login.js',
      language: Languages.JavaScript,
      code: `const kratosAdminURL = process.env.KRATOS_ADMIN_URL
// express.get('/auth/login', loginRoute)
export const loginRoute = (req, res) => {
    const request = req.query["request"]
    const url = new URL(\`\${kratosAdminURL}/auth/browser/requests/login\`)
    url.searchParams.set('request', request)
    fetch(url.toString())
        .then(r => r.json())
        .then((kratos) => res.render('loginView', { kratos }))
}`
    },
    {
      filename: 'registration.js',
      language: Languages.JavaScript,
      code: `const kratosAdminURL = process.env.KRATOS_ADMIN_URL
// express.get('/auth/registration', registrationRoute)
export const registrationRoute = (req, res) => {
    const request = req.query["request"]
    const url = new URL(\`\${kratosAdminURL}/auth/browser/requests/registration\`)
    url.searchParams.set('request', request)
    fetch(url.toString())
        .then(r => r.json())
        .then((kratos) => res.render('registrationView', { kratos }))
}`
    },
    {
      filename: 'login.tmpl',
      language: Languages.HTML,
      code: `<div class="login-view">
  <form action="{{kratos.methods.password.config.action}}" method="{{kratos.methods.password.config.method}}">
    {{#each kratos.methods.password.config.fields}}
      <input name="{{name}}" type="{{type}}" value="{{value}}">
    {{/each}}
    <button type="submit">Sign In</button>
  </form>
</div>`
    }
  ]
}

export const featureContentCoding: FeatureContentProps = {
  id: 'kratos.featurecontent.coding',
  slant: true,
  background: 'grey',
  overline: <>Identity & User Management</>,
  title: (
    <>
      <span className={'is-mute-text'}>Take back </span>control
    </>
  ),
  description: (
    <>
      Ory Kratos is a fully featured user management system built for the cloud.
      Control every aspect with a headless API.
    </>
  ),
  button: {
    ctaTitle: 'Visit the documentation',
    to: '/docs/kratos/',
    iconRight: ArrowRight
  },
  content: <CodeBox {...featureContentCodeBox} />,
  feature: {
    title: <>Integrate anywhere</>,
    description: (
      <>
        Fully configurable and with support for a wide range of protocols such
        as Google Authenticator, Ory Kratos works with any UI framework and only
        a few lines of code are required to get it up and running.
      </>
    ),
    features: [
      {
        title: <>Packed with features</>,
        description: (
          <>
            Truly configurable login and registration flows, multi-factor
            authentication, custom identity models, bring your own UI.
          </>
        )
      },
      {
        title: <>Open source</>,
        description: (
          <>
            Ory Kratos is{' '}
            <Button to={'/open-source'} style={'link-inline'}>
              open source
            </Button>{' '}
            and grows more powerful with every pull-request.
          </>
        )
      }
    ]
  }
}

export const featureList: FeaturelistProps = {
  id: 'kratos.featurelist',
  slant: true,
  features: [
    {
      title: 'Ory Kratos Features',
      description: (
        <>
          Most software applications need to deal with user and identity
          management. Ory Kratos serves common flows so you don't need to write
          everything yourself.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/docs/kratos/quickstart/'}
          iconRight={ArrowRight}
        >
          Get started
        </Button>
      ),
      features: [
        {
          title: 'Self Service Login and Registration',
          description: (
            <>
              Enable users to create and sign in to accounts using
              username/email and password combinations, Social Login,
              passwordless flows and more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'User Management',
          description: (
            <>
              Manage your userbase and get, create, update or delete identities
              and their data.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Bring Your Own UI and Identity Models',
          description: (
            <>
              Use customizable identity models (defining custom fields such as
              name, address, favorite pet) and create your own user interfaces
              for flows in your style and branding.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Profile and Account Management',
          description: (
            <>
              Let your users use secure flows to update passwords, personal
              details, email addresses, linked social profiles and more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Social Logins',
          description: (
            <>
              Simplify your users' experience and let them use their existing
              accounts at Google, GitHub, Apple, etc. to sign up and log in. All
              OIDC providers are supported.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Account Verification and Recovery',
          description: (
            <>
              Verify an identity by checking the email, phone number, or
              physical address of that user. Provide recovery of accounts using
              "Forgot Password" flows, security codes, etc.
            </>
          ),
          icon: CheckCircle
        }
      ]
    }
  ]
}

export const featureContentSDK: FeatureContentProps = {
  id: 'kratos.featurecontent.sdk',
  slant: true,
  background: 'dark',
  overline: 'Your language, our SDK',
  title: (
    <>
      <span className={'is-mute-text'}>Kratos is</span> polyglot
    </>
  ),
  description: (
    <>
      Ory Kratos is written in Go and we provide SDKs for every language. It
      works with any UI framework and interfacing with the login, registration
      and profile management is easy. Our documentation makes integrating Ory
      Kratos a snap.
    </>
  ),
  button: {
    ctaTitle: 'Run the Quickstart',
    to: '/kratos/docs/quickstart/',
    iconRight: ArrowRight
  },
  content: (
    <img
      className="responsive"
      loading="lazy"
      alt="Kratos SDKs for any programming language"
      src={KratosSDK}
    />
  )
}
