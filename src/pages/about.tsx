import React from 'react'

import Banner from '../components/layouts/banner/banner'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import SEO from '../components/layouts/seo/seo'
import SimpleText from '../components/layouts/simple-text/simple-text'
import Team from '../components/layouts/team/team'
import TeamImage from '../components/layouts/team/team-image'
import * as content from '../page-content/content-about'
import { sharedBannerHiring } from '../page-content/shared/content-banner'
import * as team from '../page-content/shared/content-team'

const AboutPage = () => (
  <Layout>
    <SEO {...content.seo} />
    <SimpleText {...content.about} />
    <Team {...team.team} />
    <Banner {...sharedBannerHiring} />
    <Team {...team.collaborators} />
    <TeamImage {...team.community} />
    <Quickstart {...content.quickstart} />
  </Layout>
)

export default AboutPage
