import React from 'react'

import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import Coding from '../components/layouts/coding/coding'
import { codingOpenSource } from '../components/layouts/coding/coding-content'
import Layout from '../components/layouts/layout/layout'
import Projects from '../components/layouts/projects/projects'
import { projectsDefault } from '../components/layouts/projects/projects-content'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import { statsDefault } from '../components/layouts/stats/stats-content'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        description={
          'Adopt a secure, modern Auth system for the cloud with open source from Ory. Fast, modular integration into any tech stack.'
        }
        title={'Ory - Open Source Auth Solutions For Everyone'}
      />

      <Projects {...projectsDefault} />
      <Quotes {...quotesDefault} />
      <Adopters {...adoptersDefault} />
      <Stats {...statsDefault} />
      <Coding {...codingOpenSource} />
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
