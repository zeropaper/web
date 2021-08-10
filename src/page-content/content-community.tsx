import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as FeaturelistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as HeroProps } from '../components/layouts/hero/hero'
import { PropTypes as QuickstartProps } from '../components/layouts/quickstart/quickstart'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

const RocketLaunch = <i className="ph-rocket-launch base-white size24" />
const ArrowRight = <i className={'ph-arrow-right-bold themed-primary size16'} />
const SlackLogo = <i className={' ph-slack-logo-fill themed-primary size32'} />
const ChatsCircle = (
  <i className={'ph-chats-circle-fill themed-primary size32'} />
)
const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const CircleThreePlus = (
  <i className={'ph-circles-three-plus-fill base-white size24'} />
)
const PenNib = <i className={' ph-pen-nib-fill themed-primary size32'} />

const BookBookmark = (
  <i className={' ph-book-bookmark-fill themed-primary size32'} />)

export const seo: SeoProps = {
  description:
    'Join us in building an open standard of authorization and authentication with an international and diverse dev community.',
  title: 'Ory Community - Contribute to the future of AuthN/AuthZ',
  keywords:
    'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
}

export const hero: HeroProps = {
  id: 'community.hero',
  title: 'Join the Ory Community',
  description:
    'You are the backbone of Ory. Members are coming from all around the world, from huge enterprises or small side projects. We may have many differences, but we all share the same goal: To build an open and free authentication and authorization standard for everyone.',

  buttons: (
    <Button
      to={'https://slack.ory.sh/'}
      style={'filled'}
      iconRight={RocketLaunch}
    >
      Join today
    </Button>
  ),
  image: (
    <StaticImage
      src="../images/illustrations/standards.svg"
      loading="lazy"
      alt="Ory Developer Community Illustration"
      className="responsive"
    />
  )
}

export const quickstart: QuickstartProps = {
  id: 'community.quickstart',
  title: <>Participate, Learn, Grow</>,
  description: (
    <>
      Ory is built in cooperation with its developer community. Our projects are
      only possible because of your dedication to open and free software! We
      maintain discussion boards on GitHub and an active Slack channel. Chat
      about code, best practices, and more:
    </>
  ),
  content: [
    {
      icon: SlackLogo,
      title: <>Dev Chat</>,
      description: (
        <>
          Ask questions, help out others with your knowledge and connect with
          developers working on the same problem.
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
      title: <>Discussions</>,
      description: (
        <>
          Make yourself heard and discuss ideas, code, and feedback directly on
          GitHub. All contributions are welcome!
        </>
      ),
      button: (
        <Button
          to={
            'https://github.com/discussions?discussions_q=org%3Aory+sort%3Aupdated-desc+'
          }
          style={'link'}
          iconRight={ArrowRight}
        >
          Explore discussions
        </Button>
      )
    },
    {
      icon: PenNib,
      title: <>Articles & Projects</>,
      description: (
        <>
          The Ory community builds open source projects and writes articles and
          guides around the Ory Ecosystem. Reach out if you want your content to
          be featured!
        </>
      ),
      button: (
        <Button
          to={'https://www.ory.sh/docs/ecosystem/community/#community-projects'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Take a look
        </Button>
      )
    },
    {
      icon: BookBookmark,
      title: <>Code of Conduct</>,
      description: (
        <>
          The Ory community provides a welcoming space for developers from
          different backgrounds. To ensure a safe experience for all, we follow
          a Code Of Conduct.
        </>
      ),
      button: (
        <Button
          to={'https://github.com/ory/meta/blob/master/CODE_OF_CONDUCT.md'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Review the CoC
        </Button>
      )
    }
  ]
}

export const featurelistArticles: FeaturelistProps = {
  id: 'community.featurelist.articles',
  features: [
    {
      icon: CircleThreePlus,
      title: 'Ory Community Articles',
      description: (
        <>
          The Ory Community has written numerous articles, tutorials, and
          introductions. If you want your content to be featured, please reach
          out to us! For a complete list, visit the overview in our docs.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/docs/ecosystem/community/#blog-postsarticles'}
          iconRight={ArrowRight}
        >
          Article overview
        </Button>
      ),
      features: [
        {
          title: 'Open source authentication with Ory Hydra and Ory Kratos',
          description: (
            <>
              An in-depth look at using Ory Open Source as a complete
              authentication platform:{' '}
              <Button
                style={'link-inline'}
                to={'https://blog.px.dev/open-source-auth/ossauth/'}
              >
                {' '}
                Read the article
              </Button>
              .
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Implementing OAuth 2.0 using Ory Hydra',
          description: (
            <>
              Implementing your own OAuth 2.0 server is not easy, but this
              article will help you out:{' '}
              <Button
                style={'link-inline'}
                to={
                  'https://yusufs.medium.com/practical-example-of-implementing-oauth-2-0-using-ory-hydra-fbaa2765d94f'
                }
              >
                Read the article
              </Button>
              .
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Ory Keto Next Generation',
          description: (
            <>
              A critical look at Ory Keto, the first open source implementation
              of Google Zanzibar:{' '}
              <Button
                style={'link-inline'}
                to={
                  'https://gruchalski.com/posts/2021-04-11-looking-at-zanzibar-through-ory-keto/'
                }
              >
                Read the article
              </Button>
              .
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Integrating Kratos with your Go App',
          description: (
            <>
              This article explains how to write an application that integrates
              Kratos in Go:{' '}
              <Button
                style={'link-inline'}
                to={
                  'https://stories.abletech.nz/integrating-third-party-provider-kratos-f5514b53af66'
                }
              >
                Read the article
              </Button>{' '}
              .
            </>
          ),
          icon: CheckCircle
        }
      ]
    }
  ]
}

export const featurelistProjects: FeaturelistProps = {
  id: 'community.featurelist.projects',
  features: [
    {
      icon: CircleThreePlus,
      title: 'Ory Community Projects',
      description: (
        <>
          The Ory Open Source community has built many projects around Ory
          software over the years. Please note that community projects are not
          maintained by the Ory team. For a complete list of projects visit the
          overview in our docs.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/docs/ecosystem/community/#open-source-software'}
          iconRight={ArrowRight}
        >
          Projects overview
        </Button>
      ),
      features: [
        {
          title: 'Reference Docker Compose',
          description: (
            <>
              A collection of reference docker-compose examples for the full Ory
              Stack:{' '}
              <Button
                style={'link-inline'}
                to={'https://github.com/radekg/ory-reference-compose'}
              >
                {' '}
                radekg/ory-reference-compose
              </Button>
              .
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Svelte & Ory Kratos',
          description: (
            <>
              A basic SvelteKit example using Ory Kratos for authentication:{' '}
              <Button
                style={'link-inline'}
                to={'https://github.com/drejohnson/sveltekit-kratos'}
              >
                drejohnson/sveltekit-kratos
              </Button>
              .
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Werther LDAP',
          description: (
            <>
              Werther is an identity provider for Ory Hydra over LDAP / Active
              Directory:{' '}
              <Button
                style={'link-inline'}
                to={'https://github.com/i-core/werther'}
              >
                i-core/werther
              </Button>
              .
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Ory Kratos React Example',
          description: (
            <>
              A React example for Ory Kratos example; written in TypeScript:{' '}
              <Button
                style={'link-inline'}
                to={'https://github.com/realStandal/kratos-react-example'}
              >
                realStandal/kratos-react-example
              </Button>{' '}
              .
            </>
          ),
          icon: CheckCircle
        }
      ]
    }
  ]
}
