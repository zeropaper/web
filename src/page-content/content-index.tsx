import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as CodingProps } from '../components/layouts/coding/coding'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as FeatureProps } from '../components/layouts/features/features'
import { PropTypes as HeroProps } from '../components/layouts/hero/hero'
import { PropTypes as QuickstartProps } from '../components/layouts/quickstart/quickstart'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

const RocketLaunch = <i className="ph-rocket-launch-fill size24" />
const BookOpen = <i className="ph-book-open-fill size24" />
const ArrowRight = <i className="ph-arrow-right-bold size16" />
const Terminal = <i className="ph-terminal-fill size32" />
const GitMerge = <i className="ph-git-merge-fill size32" />
const Code = <i className={'ph-code-fill themed-primary size32'} />
const LockOpen = <i className={'ph-lock-open-fill themed-primary size32'} />
const UserPlus = <i className={'ph-user-plus-fill themed-primary size32'} />
const CirclesThreePlus = (
  <i className={'ph-circles-three-plus-fill themed-primary size32'} />
)
const Users = <i className={'ph-users-fill themed-primary size32'} />

export const seo: SeoProps = {
  description:
    'Ory is a certified and battle-tested identity solution backed by a large open source community and trusted by Fortune500 orgs.',
  title: 'Ory - Open Source Identity Solutions For Everyone',
  keywords:
    'authentication, open source, login, authorization, security, session management, Json web tokens, access control, OAuth2.0 server, identity server, AuthN, AuthZ'
}

export const hero: HeroProps = {
  id: 'index.hero',
  title: 'Open Source Identity Platform For Everyone',
  description:
    'Secure cloud applications and authenticate, authorize and manage users. Ory is built on open standards and secures billions of requests in production every month.',

  buttons: (
    <Button
      to={'https://console.ory.sh/registration'}
      style={'filled'}
      iconRight={RocketLaunch}
    >
      Sign Up
    </Button>
  ),
  image: (
    <StaticImage
      src="../images/illustrations/hero.png"
      loading="lazy"
      alt="Overview of the Ory Console"
      className="responsive"
    />
  )
}

export const featureContentCloud: FeatureContentProps = {
  id: 'index.featurecontent.cloud',
  overline: 'Security',
  title: <>Ory Cloud</>,
  description: (
    <>
      Authenticate and manage users, set and check permissions, protect APIs,
      applications and data. The Ory Cloud comes with a dashboard for metrics
      and insights and can be managed from the user interface or CLI.
    </>
  ),
  buttons: (
    <Button to={'https://console.ory.sh'} style={'filled'}>
      Sign Up
    </Button>
  ),
  content: (
    <StaticImage
      loading="lazy"
      className="responsive"
      alt="Ory Project Dashboard"
      src="../images/illustrations/dashboard.png"
    />
  )
}

export const featureContentUX: FeatureContentProps = {
  id: 'index.featurecontent.ux',
  overline: 'Flexibility',
  title: <>Bring your own UX</>,
  description: (
    <>
      You want to brand user facing UIs and use your styles and design? No
      problem with headless integration. You want custom auth flows? Done. This
      feature is included without extra charges.
    </>
  ),
  buttons: (
    <Button to={'https://console.ory.sh'} style={'filled'}>
      Sign Up
    </Button>
  ),
  content: (
    <StaticImage
      loading="lazy"
      className="responsive"
      alt="Individual styling on user interfaces"
      src="../images/illustrations/examplelogin.png"
    />
  )
}

export const coding: CodingProps = {
  id: 'index.coding',
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
      <Button to={'/docs/get-started'} style={'filled'} iconRight={BookOpen}>
        Get started
      </Button>
    </>
  ),
  visual: (
    <StaticImage
      loading="lazy"
      className="responsive"
      alt="Example code and terminal response when integrating Ory"
      src="../images/illustrations/codebox.png"
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

export const features: FeatureProps = {
  id: 'index.features',
  overline: 'Modular Integration',
  title: <>Auth integration in 1.. 2.. done'</>,
  buttons: (
    <Button
      to={'https://console.ory.sh/registration'}
      style={'link'}
      iconRight={ArrowRight}
    >
      Sign Up
    </Button>
  ),

  feature: [
    {
      icon: Code,
      title: <>Ory is open source</>,
      description: (
        <>
          Ory's heart and soul are rooted in open source. Our commitment to open
          software will stay unchanged.
        </>
      )
    },
    {
      icon: UserPlus,
      title: <>No limits on identities</>,
      description: (
        <>
          Dont pay for Monthly Active Users. Pay for what you use.Choose a
          transparent plan that adapts to your needs.
        </>
      )
    },
    {
      icon: CirclesThreePlus,
      title: <>More features</>,
      description: (
        <>
          Ory draws from a large set of features: IAM, Permissions and Roles,
          Zero-Trust, OAuth2, OIDC, Integrations and more.
        </>
      )
    },
    {
      icon: LockOpen,
      title: <>No lock in</>,
      description: (
        <>
          We support the migration from Ory open source to the Ory Cloud, and
          the other way around. Don't worry about lock in.
        </>
      )
    }
  ]
}

export const quickstart: QuickstartProps = {
  id: 'index.quickstart',
  title: <>Ready to get started?</>,
  description: (
    <>
      Explore Ory and the future of identity. Contact us for a custom support
      package for your business.
    </>
  ),
  buttons: (
    <>
      <Button
        style={'filled'}
        to={'https://console.ory.sh/registration'}
        iconRight={RocketLaunch}
      >
        Sign Up
      </Button>
    </>
  ),
  content: [
    {
      icon: <i className={'ph-book-open-fill themed-primary size32'} />,
      title: <>Check out our docs</>,
      description: (
        <>
          Visit our documentation to learn more about technical concepts, read
          tutorials and guides as well as an extensive API reference.
        </>
      ),
      button: (
        <Button to={'/docs/'} style={'link'} iconRight={ArrowRight}>
          Read the docs
        </Button>
      )
    },
    {
      icon: Users,
      title: <>Join a diverse community</>,
      description: (
        <>
          Make yourself heard in chat and contribute code and insights to the
          open source projects at the heart of Ory.
        </>
      ),
      button: (
        <Button
          to={'https://slack.ory.sh'}
          style={'link'}
          iconRight={ArrowRight}
        >
          Join the chat
        </Button>
      )
    }
  ]
}
