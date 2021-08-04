import React from 'react'

import CodeBox, { Languages } from '../components/codebox'
import Button from '../components/freestanding/button/button'
import IconWrapper from '../components/freestanding/icon/icon-wrapper'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import FeatureContent from '../components/layouts/feature-image/feature-content'
import FeatureList from '../components/layouts/featurelist/feature-list'
import { featureListKratos } from '../components/layouts/featurelist/feature-list-content'
import Hero from '../components/layouts/hero/hero'
import { heroKratos } from '../components/layouts/hero/hero-content'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import { statsDefault } from '../components/layouts/stats/stats-content'
import Newsletter from '../components/newsletter'

import kratosProcess from '../images/kratos/kratos.svg'
import kratosPolyglot from '../images/kratos/kratos_p.svg'

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
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
    ]}
  />
)

const IndexPage = () => {
  const ArrowRight = <i className={'ph-arrow-right-bold size16'} />
  return (
    <Layout theme={'kratos'}>
      <SEO
        description="Open source user management and identity server."
        title={`Ory Kratos - Cloud Native Identity and User Management System`}
      />
      <Hero {...heroKratos} />
      <Newsletter preselect="kratos" />

      <FeatureList {...featureListKratos} />

      <FeatureContent
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory Kratos is a cloud native user management system. It provides
            user login and registration, multi-factor authentication, and user
            information storage with a headless API. It is fully configurable
            and supports a wide range of protocols such as Google Authenticator.
            Ory Kratos works with any UI framework and only a few lines of code
            are required.
          </>
        }
        buttons={
          <>
            <Button to={'/docs/kratos/'} style={'link'} iconRight={ArrowRight}>
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
            Ory Kratos is written in Go and we provide SDKs for every language.
            We work with any UI framework and interfacing with the login,
            registration and profile management is easy. Our documentation makes
            integrating Ory Kratos a snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/docs/kratos/quickstart/'}
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
            alt="Kratos SDKs for any programming language"
            src={kratosPolyglot}
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
