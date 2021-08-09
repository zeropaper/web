import React from 'react'

import Button from '../components/freestanding/button/button'
import CodeBox, { Languages } from '../components/freestanding/codebox/codebox'
import { PropTypes as CodeBoxProps } from '../components/freestanding/codebox/codebox'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as FeaturelistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as HeroProps } from '../components/layouts/hero/hero'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import Kratos from '../images/kratos/kratos.svg'
import KratosSDK from '../images/kratos/kratos_p.svg'

const Fast = <i className={'ph-fast-forward-fill size24'} />
const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />
const CircleThreePlus = (
  <i className={'ph-circles-three-plus-fill base-white size24'} />
)

export const seo: SeoProps = {
  description: 'Open source user management and identity server.',
  title: 'Ory Kratos - Cloud Native Identity and User Management System'
}

export const hero: HeroProps = {
  id: 'kratos.hero',
  title: 'Identity & User Management',
  description:
    'Use configurable authentication and master user management in the cloud.',
  buttons: (
    <Button to={'/kratos/docs/quickstart'} style={'filled'} iconRight={Fast}>
      Get Started
    </Button>
  ),
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Examples of headless Login and Registrations forms with different styles using Kratos"
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
  overline: 'Start in minutes',
  title: <>Easy Integration</>,
  description: (
    <>
      Ory Kratos is a cloud native user management system. It provides user
      login and registration, multi-factor authentication, and user information
      storage with a headless API. It is fully configurable and supports a wide
      range of protocols such as Google Authenticator. Ory Kratos works with any
      UI framework and only a few lines of code are required.
    </>
  ),
  buttons: (
    <>
      <Button to={'/docs/kratos/'} style={'link'} iconRight={ArrowRight}>
        Documentation
      </Button>
    </>
  ),
  content: <CodeBox {...featureContentCodeBox} />
}

export const featureList: FeaturelistProps = {
  id: 'kratos.featurelist',
  features: [
    {
      icon: CircleThreePlus,
      title: 'Ory Kratos Features',
      description: (
        <>
          Most software applications need to deal with user and identity
          management. Ory Kratos serves common flows, so you don't need to
          rewrite everything yourself.
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
  overline: 'Polyglot',
  title: <>SDKs for all languages</>,
  description: (
    <>
      Ory Kratos is written in Go and we provide SDKs for every language. We
      work with any UI framework and interfacing with the login, registration
      and profile management is easy. Our documentation makes integrating Ory
      Kratos a snap.
    </>
  ),
  buttons: (
    <Button
      to={'/kratos/docs/quickstart/'}
      style={'link'}
      iconRight={ArrowRight}
    >
      Run the Quickstart
    </Button>
  ),
  content: (
    <img
      className="responsive"
      loading="lazy"
      alt="Kratos SDKs for any programming language"
      src={KratosSDK}
    />
  )
}
