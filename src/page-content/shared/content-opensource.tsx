import React from 'react'

import Button from '../../components/freestanding/button/button'
import { PropTypes as ProjectProps } from '../../components/layouts/projects/projects'
import { PropTypes as QuickstartProps } from '../../components/layouts/quickstart/quickstart'

const BookOpen = <i className={'ph-book-open-fill base-white size24'} />
const ArrowRight = <i className={'ph-arrow-right-bold themed-primary size16'} />
const SlackLogo = <i className={' ph-slack-logo-fill themed-primary size32'} />
const ChatsCircle = (
  <i className={'ph-chats-circle-fill themed-primary size32'} />
)

export const opensourceProjects: ProjectProps = {
  id: 'opensource.projects',
  overline: 'Identity Server',
  title: <>Ory Open Source</>,
  description: (
    <>
      Onboard users, register and manage identities. Interface with third
      parties and control access to applications using modern and secure
      standards. Supported by a large open source community.
    </>
  )
}

export const opensourceQuickstart: QuickstartProps = {
  id: 'opensource.quickstart',
  title: <>Ready to get started?</>,
  description: (
    <>
      Explore Ory and the future of identity. Make yourself heard in discussions
      and contribute directly to Ory on GitHub. Your code will be shipped in the
      next version.
    </>
  ),
  buttons: (
    <>
      <Button
        style={'filled'}
        to={'/docs/ecosystem/projects'}
        iconRight={BookOpen}
      >
        Documentation
      </Button>
    </>
  ),
  content: [
    {
      icon: SlackLogo,
      title: <>Developer Chat on Slack</>,
      description: (
        <>
          A community to help you succeed. Become a hero for developers, ask
          questions & participate in events.
        </>
      ),
      button: (
        <Button
          to={'https://slack.ory.sh/'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Join the chat
        </Button>
      )
    },
    {
      icon: ChatsCircle,
      title: <>GitHub Discussions</>,
      description: (
        <>
          Make yourself heard on GitHub and contribute code and insights to the
          open source projects at the heart of Ory.
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
