import React from 'react'

import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import Team from '../components/layouts/team/team'
import TeamImage from '../components/layouts/team/team-image'
import * as content from '../page-content/content-about'
import * as team from '../page-content/shared/content-team'

const AboutPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <Team {...team.team} />
    <TeamImage {...team.community} />
    <Quickstart {...content.quickstart} />
  </Layout>
)

export default AboutPage
