import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../../freestanding/button/button'

import hydraProcess from '../../../images/hydra/hydra.svg'
import ketoProcess from '../../../images/keto/keto.svg'
import kratosProcess from '../../../images/kratos/kratos.svg'
import oathkeeperProcess from '../../../images/oathkeeper/oathkeeper.svg'

const RocketLaunch = <i className="ph-rocket-launch-fill size24" />
const CheckCircle = <i className={'ph-check-circle-fill size24'} />

export const heroDefault = {
  title: 'Open Source Identity Platform For Everyone',
  description:
    'Secure cloud applications and authenticate, authorize and manage users. Ory is built on open standards and secures billions of requests in production every month.',

  buttons: (
    <Button
      to={'https://console.ory.sh/registration'}
      style={'filled'}
      iconRight={RocketLaunch}
    >
      Request Access
    </Button>
  ),
  image: (
    <StaticImage
      src="../../../images/illustrations/hero.png"
      loading="lazy"
      alt="Overview of the Ory Console"
      className="responsive"
    />
  )
}

export const heroHydra = {
  title: 'OAuth 2.0 and OIDC Certified® Server',
  description:
    'Authenticate third party users and secure access to your Apps and APIs.',
  buttons: (
    <Button
      to={'/hydra/docs/5min-tutorial/'}
      style={'filled'}
      iconRight={CheckCircle}
    >
      Get Started
    </Button>
  ),
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Example OAuth2 flow with headless UI using Hydra"
      src={hydraProcess}
    />
  )
}

export const heroKratos = {
  title: 'Identity & User Management',
  description:
    'Use configurable authentication and master user management in the cloud.',

  buttons: (
    <Button
      to={'/kratos/docs/quickstart'}
      style={'filled'}
      iconRight={CheckCircle}
    >
      Get Started
    </Button>
  ),
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Examples of headless Login and Registrations forms with different styles using Kratos"
      src={kratosProcess}
    />
  )
}

export const heroKeto = {
  title: 'Global Access Control',
  description:
    'Manage user roles, rights, and permissions with access-control lists.',

  buttons: (
    <Button
      to={'/keto/docs/quickstart/'}
      style={'filled'}
      iconRight={CheckCircle}
    >
      Get Started
    </Button>
  ),
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Example use of Keto authorisation methods inside a UI"
      src={ketoProcess}
    />
  )
}

export const heroOathkeeper = {
  title: 'Control Incoming Traffic',
  description:
    'Authenticate and authorize all traffic with a Zero Trust security model.',
  buttons: (
    <Button
      to={'/oathkeeper/docs/configure-deploy/'}
      style={'filled'}
      iconRight={CheckCircle}
    >
      Get Started
    </Button>
  ),
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Example use of Oathkeeper IAM capabilities inside a UI"
      src={oathkeeperProcess}
    />
  )
}
