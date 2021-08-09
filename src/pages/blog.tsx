import React from 'react'

import BlogList from '../components/layouts/blog/blog-list'
import Layout from '../components/layouts/layout/layout'
import SEO from '../components/layouts/seo/seo'
import * as content from '../page-content/content-blog'

const BlogPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <BlogList {...content.bloglist} />
  </Layout>
)

export default BlogPage
