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
  <form action="{{kratos.methods.password.config.action}}" 
  method="{{kratos.methods.password.config.method}}">
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
    title: <>Integrate anywhere.</>,
    description: (
      <>
        Ory Kratos comes with support for a wide range of 2FA protocols such as
        TOTP, FIDO2 & WebAuthn, works with any UI framework, and only a few
        lines of code are required to get it up and running.
      </>
    ),
    features: [
      {
        title: <>Packed with features</>,
        description: (
          <>
            Configurable login and registration flows, multi-factor
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
      title: 'Features',
      description: (
        <>
          No one should have to write authentication servers - again. Rely on a
          secure and proven standard with Ory Kratos.
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
              Users create and sign in to accounts using username/email and
              password combinations, Social Login, passwordless flows, TOTP and
              more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Multifactor Authentication',
          description: (
            <>
              Implement proven standards of web security with FIDO2, WebAuthn,
              TOTP. Use Yubikeys, Google Authenticator or FaceID to reduce
              friction and increase security.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'User Management',
          description: (
            <>
              Administer your userbase and get, create, update or delete
              identities and their data, with webhooks for even more control.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Bring Your Identity Model',
          description: (
            <>
              Use customizable identity models (defining custom fields such as
              name, address, favorite pet) and create your own interfaces in
              your style and branding.
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
      Ory Kratos is written in Go and we provide SDKs for every language.
      Customizable login, registration and profile management without
      complexity.
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
