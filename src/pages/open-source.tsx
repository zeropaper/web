import React from 'react'

import Adopters from '../components/layouts/adopters/adopters'
import Coding from '../components/layouts/coding/coding'
import Layout from '../components/layouts/layout/layout'
import Projects from '../components/layouts/projects/projects'
import Quickstart from '../components/layouts/quickstart/quickstart'
import Quotes from '../components/layouts/quotes/quotes'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import * as content from '../page-content/content-opensource'
import { sharedAdopters } from '../page-content/shared/content-adopters'
import * as shared from '../page-content/shared/content-opensource'
import { sharedQuotes } from '../page-content/shared/content-quotes'
import { sharedStats } from '../page-content/shared/content-stats'

const OpensourcePage = () => (
  <Layout>
    <SEO {...content.seo} />
    <Projects {...shared.opensourceProjects} />
    <Quotes {...sharedQuotes} />
    <Adopters {...sharedAdopters} />
    <Stats {...sharedStats} />
    <Coding {...content.coding} />
    <Quickstart {...shared.opensourceQuickstart} />
  </Layout>
)

export default OpensourcePage
