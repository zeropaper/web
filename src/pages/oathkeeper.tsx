import React from 'react'

import Adopters from '../components/layouts/adopters/adopters'
import FeatureContent from '../components/layouts/feature-content/feature-content'
import FeatureList from '../components/layouts/featurelist/feature-list'
import Hero from '../components/layouts/hero/hero'
import Layout from '../components/layouts/layout/layout'
import Newsletter from '../components/layouts/newsletter/newsletter'
import Quickstart from '../components/layouts/quickstart/quickstart'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-oathkeeper'
import { sharedAdopters } from '../page-content/shared/content-adopters'
import { opensourceQuickstart } from '../page-content/shared/content-opensource'
import { sharedQuotes } from '../page-content/shared/content-quotes'
import { sharedStats } from '../page-content/shared/content-stats'

const OathkeeperPage = () => (
  <Layout theme={'oathkeeper'}>
    <SEO {...content.seo} />
    <Hero {...content.hero} />
    <Newsletter preselect="oathkeeper" />
    <FeatureList {...content.featurelist} />
    <FeatureContent {...content.featureContentCoding} />
    <FeatureContent {...content.featureContentSDK} />
    <Quotes {...sharedQuotes} />
    <Adopters {...sharedAdopters} />
    <Stats {...sharedStats} />
    <Quickstart {...opensourceQuickstart} />
  </Layout>
)

export default OathkeeperPage
