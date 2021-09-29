import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as ProjectProps } from '../../components/layouts/projects/projects'
import { PropTypes as QuickstartProps } from '../../components/layouts/quickstart/quickstart'

const ArrowRight = <i className={'ph-arrow-right-bold themed-primary size16'} />

export const opensourceProjects: ProjectProps = {
  id: 'opensource.projects',
  title: (
    <>
      <span className={'is-mute-text'}>Fully flexible, </span>fully yours
    </>
  ),
  description: (
    <>
      Ory offers reliable and scalable APIs and services for authentication,
      authorization, access control, and delegation.
    </>
  )
}

export const opensourceQuickstart: QuickstartProps = {
  id: 'opensource.quickstart',
  background: 'light-grey',
  slant: true,
  title: (
    <>
      Power up <span className={'is-mute-text'}>your stack</span>
    </>
  ),
  description: (
    <>
      Explore Ory and the future of identity. Breeze through technical concepts,
      level up with our tutorials or master our extensive API reference.
    </>
  ),
  buttons: [
    {
      ctaTitle: 'Visit the documentation',
      style: 'filled',
      to: '/docs/ecosystem/projects'
    }
  ],
  content: [
    {
      title: <>Developer Chat on Slack</>,
      description: (
        <>
          A community to help you succeed. Become a hero for developers, ask
          questions and participate in events.
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
    },
    {
      title: <>GitHub Discussions</>,
      description: (
        <>
          Chime in on GitHub and contribute code and insights to the open source
          projects that power Ory.
        </>
      ),
      button: (
        <Button
          to={'https://github.com/ory/'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Explore our codebase
        </Button>
      )
    }
  ]
}
