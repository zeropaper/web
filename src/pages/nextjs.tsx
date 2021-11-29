import React from 'react'

import FeatureContent from '../components/layouts/feature-content/feature-content'
import HeroImage from '../components/layouts/hero/hero-image'
import Layout from '../components/layouts/layout/layout'
import Newsletter from '../components/layouts/newsletter/newsletter'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-nextjs'
import { opensourceQuickstart } from '../page-content/shared/content-opensource'
import { sharedStats } from '../page-content/shared/content-stats'

const NextJSPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <HeroImage {...content.hero} />
    <FeatureContent {...content.featureContentVideo} />
    <FeatureContent {...content.featureContentCoding} />
    <Newsletter preselect="kratos" />
    <Stats {...sharedStats} />
    <Quickstart {...opensourceQuickstart} />
  </Layout>
)

export default NextJSPage
