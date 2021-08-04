import React from 'react'

import CodeBox, { Languages } from '../components/codebox'
import Button from '../components/freestanding/button/button'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import YoutubeEmbed from '../components/layouts/embed/embed'
import FeatureContent from '../components/layouts/feature-image/feature-content'
import FeatureList from '../components/layouts/featurelist/feature-list'
import { featureListHydra } from '../components/layouts/featurelist/feature-list-content'
import Hero from '../components/layouts/hero/hero'
import { heroHydra } from '../components/layouts/hero/hero-content'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import { statsDefault } from '../components/layouts/stats/stats-content'
import Newsletter from '../components/newsletter'

import hydraPolyglot from '../images/hydra/hydra_p.svg'

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
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
    ]}
  />
)

const IndexPage = () => {
  const ArrowRight = <i className={'ph-arrow-right-bold size16'} />

  return (
    <Layout theme={'hydra'}>
      <SEO
        description="Open Source OAuth 2.0 and OpenID Connect Server - gethydra.sh."
        title={
          process.env.GATSBY_DOMAIN === 'gethydra.sh'
            ? 'Open Source OAuth 2.0 and OpenID Connect Server - gethydra.sh'
            : `Ory Hydra - Open Source OAuth 2.0 and OpenID Connect Server`
        }
      />

      <Hero {...heroHydra} />
      <Newsletter preselect="hydra" />
      <FeatureContent
        overline={'Proven Scalability'}
        title={<>Scale to millions</>}
        description={
          <>
            Ory Hydra powers Sainsbury's My ID with millions of customers and
            serving hundreds of users per second. Watch the video to learn more!
          </>
        }
        buttons={
          <>
            <Button
              to={'/hydra/docs/5min-tutorial'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Get started
            </Button>
          </>
        }
        content={<YoutubeEmbed embedId="xcOjpLjy_rY" />}
      />

      <FeatureList {...featureListHydra} />

      <FeatureContent
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory Hydra is open source and OpenID Connect Certified® technology
            that integrates with any login system. Get started in minutes, only
            a few lines of code are required.
          </>
        }
        buttons={
          <>
            <Button to={'/docs/hydra/'} style={'link'} iconRight={ArrowRight}>
              Check out the documentation
            </Button>
          </>
        }
        content={<IntegrationCodeBox />}
      />

      <FeatureContent
        overline={'Polyglot'}
        title={<>SDKs for all languages</>}
        description={
          <>
            Ory Hydra is written in Go and we provide SDKs for almost every
            language including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and
            Typescript. We work with any login system and it is easy to
            customize the login experience. Our documentation makes integrating
            Ory Hydra a snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/hydra/docs/5min-tutorial/'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Run the Quickstart
            </Button>
          </>
        }
        content={
          <img
            className="responsive"
            loading="lazy"
            alt="Hydra SDKs for any programming language"
            src={hydraPolyglot}
          />
        }
      />
      <Quotes {...quotesDefault} />
      <Adopters {...adoptersDefault} />
      <Stats {...statsDefault} />
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
