import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import FeatureList from '../components/layouts/featurelist/feature-list'
import { featureListCommunityProjects } from '../components/layouts/featurelist/feature-list-content'
import { featureListCommunityArticles } from '../components/layouts/featurelist/feature-list-content'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartCommunity } from '../components/layouts/quickstart/quickstart-content'
import SEO from '../components/layouts/seo/seo'
import Newsletter from '../components/newsletter'

const CommunityPage = () => {
  const RocketLaunch = <i className="ph-rocket-launch base-white size24" />

  return (
    <Layout>
      <SEO
        description={
          'Join us in building an open standard of authorization and authentication with an international and diverse dev community.'
        }
        title={'Ory Community - Contribute to the future of AuthN/AuthZ'}
        keywords={
          'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
        }
      />

      <Hero
        title={'Join the Ory Community'}
        description={
          'You are the backbone of Ory. Members are coming from all around the world, from huge enterprises or small side projects. We may have many differences, but we all share the same goal: To build an open and free authentication and authorization standard for everyone.'
        }
        buttons={
          <Button
            to={'https://slack.ory.sh/'}
            style={'filled'}
            iconRight={RocketLaunch}
          >
            Join today
          </Button>
        }
        image={
          <StaticImage
            src="../images/illustrations/standards.svg"
            loading="lazy"
            alt="Ory Developer Community Illustration"
            className="responsive"
          />
        }
      />

      <Quickstart {...quickstartCommunity} />

      <Newsletter preselect="kratos" />

      <FeatureList {...featureListCommunityArticles} />
      <FeatureList {...featureListCommunityProjects} />
    </Layout>
  )
}

export default CommunityPage
