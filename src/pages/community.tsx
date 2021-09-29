import React from 'react'

import Banner from '../components/layouts/banner/banner'
import FeatureList from '../components/layouts/featurelist/feature-list'
import HeroImage from '../components/layouts/hero/hero-image'
import Layout from '../components/layouts/layout/layout'
import Newsletter from '../components/layouts/newsletter/newsletter'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import * as content from '../page-content/content-community'
import { sharedBannerOpensource } from '../page-content/shared/content-banner'

const CommunityPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <HeroImage {...content.hero} />
    <Banner {...sharedBannerOpensource} />
    <Quickstart {...content.quickstart} />
    <Newsletter />
    <FeatureList {...content.featurelistCommunity} />
  </Layout>
)

export default CommunityPage
