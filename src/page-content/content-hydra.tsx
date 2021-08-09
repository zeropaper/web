import React from 'react'

import Button from '../components/freestanding/button/button'
import CodeBox, { Languages } from '../components/freestanding/codebox/codebox'
import { PropTypes as CodeBoxProps } from '../components/freestanding/codebox/codebox'
import YoutubeEmbed from '../components/layouts/embed/embed'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as FeaturelistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as HeroProps } from '../components/layouts/hero/hero'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import Hydra from '../images/hydra/hydra.svg'
import HydraSDK from '../images/hydra/hydra_p.svg'

const Fast = <i className={'ph-fast-forward-fill size24'} />
const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />
const CircleThreePlus = (
  <i className={'ph-circles-three-plus-fill base-white size24'} />
)

export const seo: SeoProps = {
  description: 'Open Source OAuth 2.0 and OpenID Connect Server - gethydra.sh.',
  title:
    process.env.GATSBY_DOMAIN === 'gethydra.sh'
      ? 'Ory - Open Source Identity Solutions For Everyone'
      : 'Ory Hydra - Open Source OAuth 2.0 and OpenID Connect Server',
  keywords:
    'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
}

export const hero: HeroProps = {
  id: 'hydra.hero',
  title: 'OAuth 2.0 and OIDC Certified® Server',
  description:
    'Authenticate third party users and secure access to your Apps and APIs.',
  buttons: (
    <Button to={'/hydra/docs/5min-tutorial/'} style={'filled'} iconRight={Fast}>
      Get Started
    </Button>
  ),
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Example OAuth2 flow with headless UI using Hydra"
      src={Hydra}
    />
  )
}

export const featureContentVideo: FeatureContentProps = {
  id: 'hydra.featurecontent.video',
  overline: 'Proven Scalability',
  title: <>Scale to millions</>,
  description: (
    <>
      Ory Hydra powers Sainsbury's My ID with millions of customers and serving
      hundreds of users per second. Watch the video to learn more!
    </>
  ),
  buttons: (
    <Button
      to={'/hydra/docs/5min-tutorial'}
      style={'link'}
      iconRight={ArrowRight}
    >
      Get started
    </Button>
  ),
  content: <YoutubeEmbed embedId="xcOjpLjy_rY" />
}

export const featureContentCodeBox: CodeBoxProps = {
  tabs: [
    {
      filename: 'login.js',
      language: Languages.JavaScript,
      code: `fetch('https://hydra-admin-api/oauth2/auth/requests/login/accept?login_challenge=12345', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        subject: 'john.doe@mydomain.com',
        remember: true
    }),
})
    .then((res) => res.json())`
    },
    {
      filename: 'consent.js',
      language: Languages.JavaScript,
      code: `fetch('https://hydra-admin-api/oauth2/auth/requests/consent/accept?consent_challenge=12345', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        grant_scope: ['openid', 'offline', 'photos.read'],
        session: {
            access_token: { subscription_plan: 'small', foo: 'bar' },
            id_token: { phone: '+123 321 123 321', foo: 'bar' }
        }
    }),
})
    .then((res) => res.json())`
    }
  ]
}

export const featureContentCoding: FeatureContentProps = {
  id: 'hydra.featurecontent.coding',
  overline: 'Start in minutes',
  title: <>Easy Integration</>,
  description: (
    <>
      Ory Hydra is open source and OpenID Connect Certified® technology that
      integrates with any login system. Get started in minutes, only a few lines
      of code are required.
    </>
  ),
  buttons: (
    <>
      <Button to={'/docs/hydra/'} style={'link'} iconRight={ArrowRight}>
        Documentation
      </Button>
    </>
  ),
  content: <CodeBox {...featureContentCodeBox} />
}

export const featureList: FeaturelistProps = {
  id: 'hydra.featurelist',
  features: [
    {
      icon: CircleThreePlus,
      title: 'Ory Hydra Features',
      description: (
        <>
          Ory Hydra is a hardened and certified OAuth 2.0 and OpenID Connect
          provider, securing hundreds of billions of API requests in thousands
          of deployments.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/hydra/docs/5min-tutorial/'}
          iconRight={ArrowRight}
        >
          Get started
        </Button>
      ),
      features: [
        {
          title: 'Integrates Everywhere',
          description: (
            <>
              Implement the full Open Authorization 2.0 standard in your
              technology stack. Ory Hydra integrates with any open source (e.g.{' '}
              <Button style={'link-inline'} to={'./kratos'}>
                Ory Kratos
              </Button>
              ) or proprietary IAM system.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'OpenID Certified®',
          description: (
            <>
              Rely on an{' '}
              <Button
                style={'link-inline'}
                to={'https://openid.net/developers/certified/'}
              >
                {' '}
                OpenID Certified® OIDC Provider
              </Button>
              . Ory Hydra implements all flows specified by the IETF and OpenID
              Foundation.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Bring Your Own UX',
          description: (
            <>
              Use your branding and user interfaces for all OAuth2.0 and OpenID
              Connect flows. Your own styles and flows powered by a robust API
              and intuitive CLI.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Compatible with MITREid',
          description: (
            <>
              Migrate from{' '}
              <Button
                style={'link-inline'}
                to={'https://mitreid-connect.github.io/'}
              >
                MITREid Connect
              </Button>{' '}
              to Ory Hydra. Migration{' '}
              <Button
                style={'link-inline'}
                to={'/hydra/docs/guides/migrating-from-mitreid/'}
              >
                documentation
              </Button>{' '}
              is provided.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Cryptographic Key Storage',
          description: (
            <>
              Encrypt cryptographic keys for e.g. signing JWTs, store them
              securely and manage OAuth 2.0 clients directly from the CLI.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Security First and High Performance',
          description: (
            <>
              Sleep easy, knowing that Ory Hydra is{' '}
              <Button
                style={'link-inline'}
                to={'/hydra/docs/security-architecture/'}
              >
                designed
              </Button>{' '}
              to reduce security incidents and scales as required. Ory Hydra
              serves tokens to millions of users weekly and just works.
            </>
          ),
          icon: CheckCircle
        }
      ]
    }
  ]
}

export const featureContentSDK: FeatureContentProps = {
  id: 'hydra.featurecontent.sdk',
  overline: 'Polyglot',
  title: <>SDKs for all languages</>,
  description: (
    <>
      Ory Hydra is written in Go and we provide SDKs for almost every language
      including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and Typescript. We
      work with any login system and it is easy to customize the login
      experience. Our documentation makes integrating Ory Hydra a snap.
    </>
  ),
  buttons: (
    <Button
      to={'/hydra/docs/5min-tutorial/'}
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
      alt="Hydra SDKs for any programming language"
      src={HydraSDK}
    />
  )
}
