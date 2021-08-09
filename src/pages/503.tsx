import React from 'react'

import FeatureContent from '../components/layouts/feature-content/feature-content'
import Layout from '../components/layouts/layout/layout'
import { featureContent503 } from '../page-content/shared/content-errors'

const NotFoundPage = () => (
  <Layout>
    <FeatureContent {...featureContent503} />
  </Layout>
)

export default NotFoundPage
