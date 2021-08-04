import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Coding from '../components/layouts/coding/coding'
import { codingDefault } from '../components/layouts/coding/coding-content'
import FeatureContent from '../components/layouts/feature-image/feature-content'
import Features from '../components/layouts/features/features'
import { featuresDefault } from '../components/layouts/features/features-content'
import Hero from '../components/layouts/hero/hero'
import { heroDefault } from '../components/layouts/hero/hero-content'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartDefault } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import { statsDefault } from '../components/layouts/stats/stats-content'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        description={
          'Ory is a certified and battle-tested identity solution backed by a large open source community and trusted by Fortune500 orgs.'
        }
        title={'Ory - Open Source Identity Solutions For Everyone'}
        keywords={
          'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
        }
      />
      <Hero {...heroDefault} />
      <Quotes {...quotesDefault} />
      <Adopters {...adoptersDefault} />
      <Stats {...statsDefault} />
      <FeatureContent
        overline={'Security'}
        title={<>Ory Cloud</>}
        description={
          <>
            Authenticate and manage users, set and check permissions, protect
            APIs, applications and data. The Ory Cloud comes with a dashboard
            for metrics and insights and can be managed from the user interface
            or CLI.
          </>
        }
        buttons={
          <Button to={'https://console.ory.sh'} style={'filled'}>
            Request Access
          </Button>
        }
        content={
          <StaticImage
            loading="lazy"
            className="responsive"
            alt="Ory Project Dashboard"
            src="../images/illustrations/dashboard.png"
          />
        }
      />
      <FeatureContent
        overline={'Flexibility'}
        title={<>Bring your own UX</>}
        description={
          <>
            You want to brand user facing UIs and use your styles and design? No
            problem with headless integration. You want custom auth flows? Done.
            This feature is included without extra charges.
          </>
        }
        buttons={
          <Button to={'https://console.ory.sh'} style={'filled'}>
            Request Access
          </Button>
        }
        content={
          <StaticImage
            loading="lazy"
            className="responsive"
            alt="Individual styling on user interfaces"
            src="../images/illustrations/examplelogin.png"
          />
        }
      />
      <Coding {...codingDefault} />
      <Features {...featuresDefault} />
      <Quickstart {...quickstartDefault} />
    </Layout>
  )
}

export default IndexPage
