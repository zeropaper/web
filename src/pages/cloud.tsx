import React from 'react'

import Adopters from '../components/layouts/adopters/adopters'
import Coding from '../components/layouts/coding/coding'
import FeatureContent from '../components/layouts/feature-content/feature-content'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-cloud'
import { sharedAdopters } from '../page-content/shared/content-adopters'
import { sharedQuotes } from '../page-content/shared/content-quotes'
import { sharedStats } from '../page-content/shared/content-stats'
import { sharedBannerOpensource } from '../page-content/shared/content-banner'
import Banner from '../components/layouts/banner/banner'
import Projects from '../components/layouts/projects/projects'
import * as shared from '../page-content/shared/content-opensource'

const CloudPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <Hero {...content.hero} />
    <Projects {...shared.opensourceProjects} />
    <FeatureContent {...content.featureContentCloud} />
    <FeatureContent {...content.featureContentUX} />
    <Coding {...content.coding} />
    <Stats {...sharedStats} />
    <Quickstart {...content.quickstart} />
  </Layout>
)

export default CloudPage
