import React from 'react'

import HeroForm from '../components/layouts/hero/hero-form'
import { heroFormOreilly } from '../components/layouts/hero/hero-form-content'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOreilly } from '../components/layouts/quickstart/quickstart-content'
import SEO from '../components/layouts/seo/seo'

const OreillyPage = () => {
  return (
    <Layout>
      <SEO
        description="Identity In Modern Applications - Download the free eBook."
        title={`Ory O'Reilly - Identity In Modern Applications  Book`}
      />

      <HeroForm {...heroFormOreilly} />
      <Quickstart {...quickstartOreilly} />
    </Layout>
  )
}

export default OreillyPage
