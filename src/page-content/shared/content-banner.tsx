import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as BannerProps } from '../../components/layouts/banner/banner'

const ArrowRight = <i className={'ph-arrow-right-bold themed-primary size16'} />

export const sharedBannerHiring: BannerProps = {
  id: 'shared.banner.hiring',
  title: "We're hiring!",
  small: true,
  text: (
    <>
      Help us create an open and free standard for authentication and
      authorization that is available to everyone.
    </>
  ),
  button: (
    <>
      <Button to={'/jobs'} style={'link'} iconRight={ArrowRight}>
        Join Our Team
      </Button>
    </>
  )
}
