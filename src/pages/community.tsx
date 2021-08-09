import React from 'react'

import FeatureList from '../components/layouts/featurelist/feature-list'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Newsletter from '../components/layouts/newsletter/newsletter'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import * as content from '../page-content/content-community'

const CommunityPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <Hero {...content.hero} />
    <Quickstart {...content.quickstart} />
    <Newsletter />
    <FeatureList {...content.featurelistArticles} />
    <FeatureList {...content.featurelistProjects} />
  </Layout>
)

export default CommunityPage
