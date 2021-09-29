import React from 'react'

import Adopters from '../components/layouts/adopters/adopters'
import Faq from '../components/layouts/faq/faq'
import FeatureList from '../components/layouts/featurelist/feature-list'
import Layout from '../components/layouts/layout/layout'
import Pricing from '../components/layouts/pricing/pricing'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-pricing'
import { pricingOpensource } from '../page-content/pricing-tiers/pricing-opensource'
import { pricingSaas } from '../page-content/pricing-tiers/pricing-saas'
import { sharedAdopters } from '../page-content/shared/content-adopters'
import { sharedQuotes } from '../page-content/shared/content-quotes'
import { sharedStats } from '../page-content/shared/content-stats'

const PricingPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <Pricing {...content.pricing} {...pricingSaas} {...pricingOpensource} />
    <Adopters {...sharedAdopters} />
    <Stats {...sharedStats} />
    <FeatureList {...content.featurelist} />
    <Quotes {...sharedQuotes} />
    <Faq {...content.faq} />
  </Layout>
)

export default PricingPage
