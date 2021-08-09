import React from 'react'

import HeroFeatures from '../components/layouts/hero/hero-features'
import JobsList from '../components/layouts/jobs/jobs-list'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import * as content from '../page-content/content-jobs'

const JobsPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <HeroFeatures {...content.hero} />
    <JobsList {...content.jobs} />
    <HeroFeatures {...content.values} />
    <Quickstart {...content.quickstart} />
  </Layout>
)

export default JobsPage
