import React from 'react'

import Layout from '../../components/layouts/layout/layout'
import SEO from '../../components/layouts/seo/seo'
import DiversityStatement from '../../components/layouts/summit/diversity-statement'
import SessionList from '../../components/layouts/summit/session-list'
import * as content from '../../page-content/events/content-summit-21'

const BlogPage = () => (
  <Layout theme="info" isEvent={true}>
    <SEO {...content.seo} />
    <SessionList {...content.sessionList} />
    <DiversityStatement {...content.diversityStatement} />
  </Layout>
)

export default BlogPage
