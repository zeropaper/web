import React from 'react'

import { PropTypes as BloglistProps } from '../components/layouts/blog/blog-list'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

export const seo: SeoProps = {
  title: 'Ory Developer Blog and Articles',
  description:
    'Read articles and blog posts from Ory core contributors and maintainers.'
}

export const bloglist: BloglistProps = {
  id: 'blog.bloglist',
  title: 'Developer Blog & Articles'
}
