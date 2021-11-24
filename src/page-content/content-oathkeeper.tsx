import React from 'react'

import Button from '../components/freestanding/button/button'
import CodeBox, {
  Languages,
  PropTypes as CodeBoxProps
} from '../components/freestanding/codebox/codebox'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as FeaturelistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as HeroImageProps } from '../components/layouts/hero/hero-image'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import Oathkeeper from '../images/oathkeeper/oathkeeper.svg'
import OathkeeperSDK from '../images/oathkeeper/oathkeeper_p.svg'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />
const PlusCircle = <i className={'ph-plus-circle-fill base-grey-400 size16'} />

export const seo: SeoProps = {
  description:
    'Oathkeeper Open Source Identity and Access Proxy (IAP). Authenticate and authorize traffic using Zero Trust.',
  title: 'Ory Oathkeeper - Open Source Identity and Access Proxy (IAP)'
}

export const hero: HeroImageProps = {
  id: 'oathkeeper.hero',
  title: (
    <>
      <span className={'is-mute-text'}>Nothing goes unseen</span> - control all
      incoming traffic
    </>
  ),
  description:
    'Authenticate, authorize and mutate any incoming network traffic, using a Zero Trust / BeyondCorp security model.',
  buttons: [
    {
      ctaTitle: 'Get Started',
      style: 'filled',
      to: '/oathkeeper/docs/configure-deploy/'
    }
  ],
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Example use of Oathkeeper IAM capabilities inside a UI"
      src={Oathkeeper}
    />
  )
}

export const featurelist: FeaturelistProps = {
  id: 'oathkeeper.featurelist',
  slant: true,
  features: [
    {
      title: 'Features',
      description: (
        <>
          Forward authorized requests and reject unauthorized ones. Ory
          Oathkeeper can act as a reverse proxy or interface with your existing
          API Gateway.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/oathkeeper/docs/configure-deploy/'}
          iconRight={ArrowRight}
        >
          Get started
        </Button>
      ),
      features: [
        {
          title: 'Identity and Access Proxy',
          description: (
            <>
              Authorize HTTP requests to your server based on sets of Access
              Rules.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Zero Trust Architecture',
          description: (
            <>
              Apply Zero Trust / BeyondCorp security in your tech stack. Ory
              Oathkeeper enables secure access for all users (e.g. employees,
              partners, customers).
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Carefree Integration',
          description: (
            <>
              Deploy alongside your existing API Gateways. Ory Oathkeeper plugs
              into Ambassador, Envoy, AWS API Gateway, Nginx and many more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Enrich Data',
          description: (
            <>
              Accumulate data from multiple sources and parse it into custom
              headers: X-User-ID, JSON Web Tokens and more.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Next Generation Oathkeeper',
          description: (
            <>
              <em>Coming soon:</em> The next generation of Ory Oathkeeper. Learn
              more and submit feedback on{' '}
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/oathkeeper/issues/441'}
              >
                GitHub
              </Button>
              .
            </>
          ),
          icon: PlusCircle
        }
      ]
    }
  ]
}

export const featureContentCodeBox: CodeBoxProps = {
  tabs: [
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
  ]
}

export const featureContentCoding: FeatureContentProps = {
  id: 'oathkeeper.featurecontent.coding',
  slant: true,
  background: 'grey',
  overline: 'Identity and Access Proxy (IAP)',
  title: <>Easy Integration</>,
  description: (
    <>
      Ory Oathkeeper is an Open Source cloud native Identity & Access Proxy /
      API (IAP) and Access Control Decision API. It authenticates, authorizes,
      and mutates incoming HTTP(s) requests, and is written in Go.
      Implementation is straightforward on any system.
    </>
  ),
  button: {
    ctaTitle: 'Visit the documentation',
    to: '/docs/oathkeeper/',
    iconRight: ArrowRight
  },
  content: <CodeBox {...featureContentCodeBox} />
}

export const featureContentSDK: FeatureContentProps = {
  id: 'oathkeeper.featurecontent.sdk',
  slant: true,
  background: 'dark',
  overline: 'Your language, our SDK',
  title: (
    <>
      <span className={'is-mute-text'}>Oathkeeper is</span> polyglot
    </>
  ),
  description: (
    <>
      Ory Oathkeeper is written in Go and we provide SDKs for almost every
      language including Dart, .NET, Go, Java, PHP, Python, Ruby, Rust and
      Typescript. Our documentation makes integrating Ory Oathkeeper a snap.
    </>
  ),
  button: {
    ctaTitle: 'Run the Quickstart',
    to: '/oathkeeper/docs/configure-deploy/',
    iconRight: ArrowRight
  },
  content: (
    <img
      className="responsive"
      loading="lazy"
      alt="Oathkeeper SDKs for any programming language"
      src={OathkeeperSDK}
    />
  )
}
