import React from 'react'

import { PropTypes as AnnouncementProps } from '../../components/layouts/navigation/announcement'

export const jobs: AnnouncementProps = {
  longText: 'Ory is hiring - shape the future of identity with us!',
  shortText: 'Ory is hiring!',
  link: '/jobs?mtm_campaign=job-banner'
}

export const summit: AnnouncementProps = {
  longText:
    'Sign up for Ory Summit 2021: free developer conference on security, IAM & more!',
  shortText: 'Sign up for Ory Summit 2021!',
  link: '/summit21?mtm_campaign=ory-summit-2021&mtm_kwd=banner-landingpage',
  openInNewWindow: true
}
