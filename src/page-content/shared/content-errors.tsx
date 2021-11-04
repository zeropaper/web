import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as FeatureContentProps } from '../../components/layouts/feature-content/feature-content'

export const featureContent404: FeatureContentProps = {
  id: 'error.featurecontent.404',
  overline: '404 - not found',
  title: <>We couldn't find the page you were looking for</>,
  description: (
    <>
      The requested page does not exist. If you think this page should exist,
      please {''}
      <Button
        style={'link-inline'}
        to={'https://github.com/ory/web/issues/new/'}
      >
        let us know
      </Button>
      !
    </>
  ),
  buttons: (
    <Button to={'/'} style={'filled'}>
      Return home
    </Button>
  ),
  content: (
    <video
      width="100%"
      autoPlay
      controls={false}
      loop
      muted
      playsInline
      preload="true"
    >
      <source src="/videos/notfound.mp4" type="video/mp4" />
    </video>
  )
}

export const featureContent503: FeatureContentProps = {
  id: 'error.featurecontent.503',
  overline: '503 - service unavailable',
  title: <>Hang on, we'll be right back</>,
  description: (
    <>
      We're undergoing routine maintenance, and will be back online in just a
      bit. Don't worry, we've got our best engineers on the job. If you have
      feedback or want to file a bug report, please {''}
      <Button
        style={'link-inline'}
        to={'https://github.com/ory/platform/issues/new/choose'}
      >
        open an issue
      </Button>
      !
    </>
  ),
  buttons: (
    <Button to={'https://status.ory.sh/'} style={'filled'}>
      Status Page
    </Button>
  ),
  content: (
    <video
      width="100%"
      autoPlay
      controls={false}
      loop
      muted
      playsInline
      preload="true"
    >
      <source src="/videos/notfound.mp4" type="video/mp4" />
    </video>
  )
}
