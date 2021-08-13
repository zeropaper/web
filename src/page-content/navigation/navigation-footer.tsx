import cn from 'classnames'
import React from 'react'

import Button from '../../components/freestanding/button/button'
import { FooterPropTypes } from '../../components/layouts/footer/footer'

export const copyright: Pick<FooterPropTypes, 'copyright'> = {
  copyright: <>© Copyright 2021 Ory Corp</>
}

export const contact: Pick<FooterPropTypes, 'contact'> = {
  contact: {
    contactEmail: (
      <Button to={'mailto:office@ory.sh'} style={'link'}>
        office@ory.sh
      </Button>
    ),
    contactText: <>👋 Say Hello</>
  }
}

export const social: Pick<FooterPropTypes, 'social'> = {
  social: [
    <Button
      to={'https://www.github.com/ory'}
      style={'none'}
      openInNewWindow={true}
    >
      <i className={'ph-github-logo-fill base-grey-200 size24'} />
    </Button>,
    <Button
      to={'https://www.youtube.com/channel/UC9hCxZZeviexX0GclD0brrw'}
      style={'none'}
      openInNewWindow={true}
    >
      <i className={'ph-youtube-logo-fill base-grey-200 size24'} />
    </Button>,
    <Button
      to={'https://twitter.com/orycorp'}
      style={'none'}
      openInNewWindow={true}
    >
      <i className={'ph-twitter-logo-fill base-grey-200 size24'} />
    </Button>,
    <Button to={'https://slack.ory.sh/'} style={'none'} openInNewWindow={true}>
      <i className={'ph-slack-logo-fill base-grey-200 size24'} />
    </Button>,
    <Button
      to={'https://www.linkedin.com/company/ory-corp/'}
      style={'none'}
      openInNewWindow={true}
    >
      <i className={'ph-linkedin-logo-fill base-grey-200 size24'} />
    </Button>
  ]
}

export const legal: Pick<FooterPropTypes, 'legal'> = {
  legal: [
    <Button to={'https://status.ory.sh/'} style={'link'} openInNewWindow={true}>
      Status
    </Button>,
    <Button to={'/privacy'} style={'link'}>
      Privacy
    </Button>,
    <Button to={'/tos'} style={'link'}>
      Terms
    </Button>
  ]
}

export const links: Pick<FooterPropTypes, 'links'> = {
  links: [
    {
      title: 'Product',
      links: [
        <Button
          to={'https://console.ory.sh/registration'}
          style={'link'}
          openInNewWindow={true}
        >
          Cloud
        </Button>,
        <Button to={'/open-source'} style={'link'} openInNewWindow={true}>
          Open Source
        </Button>,
        <Button to={'/hydra'} style={'link'} openInNewWindow={true}>
          Hydra
        </Button>,
        <Button to={'/kratos'} style={'link'} openInNewWindow={true}>
          Kratos
        </Button>,
        <Button to={'/keto'} style={'link'} openInNewWindow={true}>
          Keto
        </Button>,
        <Button to={'/oathkeeper'} style={'link'} openInNewWindow={true}>
          Oathkeeper
        </Button>,
        <Button to={'/pricing'} style={'link'} openInNewWindow={true}>
          Pricing
        </Button>
      ]
    },
    {
      title: 'Developers',
      links: [
        <Button to={'/docs/'} style={'link'} openInNewWindow={true}>
          Documentation
        </Button>,
        <Button to={'/community'} style={'link'}>
          Community
        </Button>,
        <Button
          to={'https://github.com/ory'}
          style={'link'}
          openInNewWindow={true}
        >
          GitHub
        </Button>,
        <Button to={'/blog'} style={'link'} openInNewWindow={true}>
          Blog
        </Button>
      ]
    },
    {
      title: 'Company',
      links: [
        <Button to={'/about'} style={'link'} openInNewWindow={true}>
          About Us
        </Button>,
        <Button to={'/jobs'} style={'link'} openInNewWindow={true}>
          Jobs&nbsp;
          <span className={cn('pill')}>hiring</span>
        </Button>,
        <Button
          to={'mailto:office@ory.sh'}
          style={'link'}
          openInNewWindow={true}
        >
          Contact Us
        </Button>,
        <Button
          to={'/identity-in-modern-applications-oreilly'}
          style={'link'}
          openInNewWindow={false}
        >
          Identity Report
        </Button>
      ]
    }
  ]
}
