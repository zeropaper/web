import React from 'react'

import Coding from '../components/layouts/coding/coding'
import FeatureContent from '../components/layouts/feature-content/feature-content'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-cloud'
import { sharedStats } from '../page-content/shared/content-stats'
import ProjectsList from '../components/layouts/projects/projects-list'

const CloudPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <Hero {...content.hero} />
    <ProjectsList {...content.projectListCloud} />
    <FeatureContent {...content.featureContentCloud} />
    <FeatureContent {...content.featureContentUX} />
    <Coding {...content.coding} />
    <Stats {...sharedStats} />
    <Quickstart {...content.quickstart} />
  </Layout>
)

export default CloudPage
