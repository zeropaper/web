import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as CodingProps } from '../components/layouts/coding/coding'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import CodeBoxImage from '../images/illustrations/codebox.png'

const Terminal = <i className="ph-terminal-fill size32" />
const GitMerge = <i className="ph-git-merge-fill size32" />
const BookOpen = <i className="ph-book-open-fill size24" />
const ArrowRight = <i className="ph-arrow-right-bold size16" />

export const seo: SeoProps = {
  description:
    'Adopt a secure, modern Auth system for the cloud with open source from Ory. Fast, modular integration into any tech stack.',
  title: 'Ory - Open Source Auth Solutions For Everyone'
}

export const coding: CodingProps = {
  id: 'opensource.coding',
  overline: 'Made for developers',
  title: <>Improve your developer experience</>,
  description: (
    <>
      At Ory, our mission is to improve the overall developer experience. We
      provide SDKs, documentation, tutorials, CLIs and community support. Our
      open source approach lets you to participate in API and architecture
      discussions - your next PR will be shipped in Ory.
    </>
  ),
  buttons: (
    <>
      <Button to={'/docs/open-source'} style={'filled'} iconRight={BookOpen}>
        Get started
      </Button>
    </>
  ),

  visual: (
    <img
      loading="lazy"
      className="responsive"
      alt="Example code and terminal response when integrating Ory"
      src={CodeBoxImage}
    />
  ),

  content: [
    {
      icon: Terminal,
      title: <>Powerful tools</>,
      description: (
        <>
          Ory ships REST APIs, gRPC APIs, SDKs, and CLIs for all operating
          systems and CPUs.
        </>
      ),
      button: (
        <Button
          to={'/docs/guides/ory-cli-install-use'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Install the CLI
        </Button>
      )
    },
    {
      icon: GitMerge,
      title: <>Based on Open Source</>,
      description: (
        <>Participate in discussions, feature requests, and PRs on GitHub.</>
      ),
      button: (
        <Button
          to={'https://github.com/ory/'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Star us on GitHub
        </Button>
      )
    }
  ]
}
