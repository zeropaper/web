import React from 'react'

import Adopters from '../components/layouts/adopters/adopters'
import Banner from '../components/layouts/banner/banner'
import FeatureContent from '../components/layouts/feature-content/feature-content'
import FeatureList from '../components/layouts/featurelist/feature-list'
import HeroImage from '../components/layouts/hero/hero-image'
import Layout from '../components/layouts/layout/layout'
import Newsletter from '../components/layouts/newsletter/newsletter'
import Quickstart from '../components/layouts/quickstart/quickstart'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-hydra'
import { sharedAdopters } from '../page-content/shared/content-adopters'
import { sharedBannerHydra } from '../page-content/shared/content-banner'
import { opensourceQuickstart } from '../page-content/shared/content-opensource'
import { hydraQuotes } from '../page-content/shared/content-quotes'
import { sharedStats } from '../page-content/shared/content-stats'

const HydraPage = () => (
  <Layout theme={'hydra'}>
    <SEO {...content.seo} />
    <HeroImage {...content.hero} />
    <Banner {...sharedBannerHydra} />
    <Adopters {...sharedAdopters} />
    <FeatureContent {...content.featureContentVideo} />
    <FeatureContent {...content.featureContentCoding} />
    <FeatureContent {...content.featureContentSDK} />
    <FeatureList {...content.featureList} />
    <Newsletter preselect="hydra" />
    <Stats {...sharedStats} />
    <Quotes {...hydraQuotes} />
    <Quickstart {...opensourceQuickstart} />
  </Layout>
)

export default HydraPage
