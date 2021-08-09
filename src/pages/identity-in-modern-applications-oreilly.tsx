import React from 'react'

import HeroForm from '../components/layouts/hero/hero-form'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import * as content from '../page-content/content-oreilly'

const OreillyPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <HeroForm {...content.form} />
    <Quickstart {...content.quickstart} />
  </Layout>
)

export default OreillyPage
