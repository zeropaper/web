import React from 'react'

import CodeBox, { Languages } from '../components/codebox'
import Button from '../components/freestanding/button/button'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import FeatureContent from '../components/layouts/feature-image/feature-content'
import FeatureList from '../components/layouts/featurelist/feature-list'
import { featureListOathkeeper } from '../components/layouts/featurelist/feature-list-content'
import Hero from '../components/layouts/hero/hero'
import { heroOathkeeper } from '../components/layouts/hero/hero-content'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import { statsDefault } from '../components/layouts/stats/stats-content'
import Newsletter from '../components/newsletter'

import oathkeeperPolyglot from '../images/oathkeeper/oathkeeper_p.svg'

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
      {
        filename: 'access-rules.yml',
        language: Languages.YML,
        code: `---
- upstream:
    url: http://my-backend-service
  match:
    url: http://my-app/some-route/<.*>
    methods:
      - GET
  authenticators:
    - handler: jwt
  authorizer:
    handler: allow
  mutators:
    - handler: headers
      config:
        headers:
          X-User: "{{ print .Subject }}"
# ...`
      },
      {
        filename: 'config.yml',
        language: Languages.YML,
        code: `---
daemon:
  proxy:
    port: 4455
access_rules:
  repositories:
    - access-rules.yml
authenticators:
  jwt:
    enabled: true
    config:
      jwks_urls:
        - https://my-website.com/.well-known/jwks.json
# ...
`
      }
    ]}
  />
)

const IndexPage = () => {
  const ArrowRight = <i className={'ph-arrow-right-bold size16'} />
  return (
    <Layout theme={'oathkeeper'}>
      <SEO
        description={
          'Oathkeeper Open Source Identity and Access Proxy (IAP). Authenticate and authorize traffic using Zero Trust.'
        }
        title={'Ory Oathkeeper - Open Source Identity and Access Proxy (IAP)'}
      />

      <Hero {...heroOathkeeper} />

      <Newsletter preselect="oathkeeper" />

      <FeatureList {...featureListOathkeeper} />

      <FeatureContent
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory Oathkeeper is an Open Source cloud native Identity & Access
            Proxy / API (IAP) and Access Control Decision API. It authenticates,
            authorizes, and mutates incoming HTTP(s) requests, and is written in
            Go. Implementation is straightforward on any system.
          </>
        }
        buttons={
          <>
            <Button
              to={'/docs/oathkeeper/'}
              style={'link'}
              iconRight={ArrowRight}
            >
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
            Ory Oathkeeper is written in Go and we provide SDKs for almost every
            language including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and
            Typescript. Our documentation makes integrating Ory Oathkeeper a
            snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/oathkeeper/docs/configure-deploy/'}
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
            alt="Oathkeeper SDKs for any programming language"
            src={oathkeeperPolyglot}
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
