import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as QuickstartProps } from '../components/layouts/quickstart/quickstart'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'
import { PropTypes as SimpleTextProps } from '../components/layouts/simple-text/simple-text'

const ArrowRight = <i className={'ph-arrow-right-bold themed-primary size16'} />

export const seo: SeoProps = {
  description:
    'Secure open source IAM, authorization and access control infrastructure for the cloud.',
  title: 'Ory - A modern open source identity solution'
}

export const about: SimpleTextProps = {
  id: 'about.hero',
  title: 'About Us',
  text: (
    <>
      Our mission is to provide a common access control, authorization and
      identity infrastructure that manages IAM and the associated data created
      in cloud applications. We deliver the information and associated analytics
      to members in the network in accordance with data privacy and usage
      conventions.
    </>
  )
}

export const quickstart: QuickstartProps = {
  id: 'about.quickstart',
  slant: true,
  title: (
    <>
      <span className={'is-mute-text'}>Hello,</span> nice to meet you
    </>
  ),
  description: (
    <>
      Ory is open. Get to know us by trying out our products, or joining a
      conversation on Ory Slack or GitHub Discussions. And we are hiring.
    </>
  ),
  buttons: [
    {
      ctaTitle: 'Contact us',
      style: 'filled',
      to: 'mailto:office@ory.sh'
    }
  ],
  content: [
    {
      title: <>Work for Ory</>,
      description: (
        <>
          We are looking for collaborators and colleagues to build Ory with us.
          We work together, learn, and grow as a team.
        </>
      ),
      button: (
        <Button to={'/jobs'} style={'link'} iconRight={ArrowRight}>
          Join the team
        </Button>
      )
    },
    {
      title: <>Chat with us directly</>,
      description: (
        <>
          Join the Ory Community of developers, makers, and creators.
          Contribute, ask the experts, and participate in events.
        </>
      ),
      button: (
        <Button
          to={'https://slack.ory.sh/'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Join the chat on Slack
        </Button>
      )
    }
  ]
}
