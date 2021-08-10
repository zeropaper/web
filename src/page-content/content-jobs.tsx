import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as HeroFeatureProps } from '../components/layouts/hero/hero-features'
import { PropTypes as JobsProps } from '../components/layouts/jobs/jobs-list'
import { PropTypes as QuickstartProps } from '../components/layouts/quickstart/quickstart'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

const ChatsCircle = (
  <i className={'ph-chats-circle-fill themed-primary size32'} />
)
const BookOpen = <i className={'ph-book-open-fill base-white size24'} />
const SlackLogo = <i className={' ph-slack-logo-fill themed-primary size32'} />
const ArrowRight = <i className={'ph-arrow-right-bold themed-primary size16'} />
const Code = <i className={'ph-code-fill themed-primary size32'} />
const CirclesThreePlus = (
  <i className={'ph-circles-three-plus-fill themed-primary size32'} />
)
const GitPR = <i className={'ph-git-pull-request-fill themed-primary size32'} />
const RocketLaunch = (
  <i className={' ph-rocket-launch-fill themed-primary size32'} />
)

export const seo: SeoProps = {
  description:
    'Build scalable open source software at one of the fastest growing startups in the space of cloud identity',
  title: 'Join the Ory Team - Ory Jobs'
}

export const hero: HeroFeatureProps = {
  id: 'jobs.herofeatures',
  thin: true,
  title: 'Work on things that matter',
  description: (
    <>
      Ory builds open source software because the internet needs a secure
      infrastructure to authenticate and authorize access. And we'd like your
      help!
    </>
  ),

  textbox: [
    {
      icon: Code,
      title: <>Open Source Spirit</>,
      description: (
        <>
          Help us create an open and free standard for authentication and
          authorization that is available to everyone. Much of the work we do is
          released to the public domain. Part of Ory is a tremendous community
          that you will fall in love with.
        </>
      )
    },
    {
      icon: GitPR,
      title: <>Freedom</>,
      description: (
        <>
          We feel that we should work with the best software out there and
          support those that build it - Ory is using open source for almost
          everything. Work with technology you love and keep your skills sharp
          on a modern stack, always at the forefront of change.
        </>
      )
    },
    {
      icon: CirclesThreePlus,
      title: <>Do What Matters</>,
      description: (
        <>
          Everyone working at Ory has a passion for the work we do. We foster a
          culture of flat hierarchy, where everyone has a voice and we seek
          input from the whole company on key decisions. At Ory, people care
          about what they are building. Build something that has real value.
        </>
      )
    },
    {
      icon: RocketLaunch,
      title: <>Play A Vital Role</>,
      description: (
        <>
          You will be working in a fast-moving startup, breaking up a market
          that has been plagued by corporate mold for far too long. At Ory you
          won’t be just another employee - You have a direct impact on our
          success and the team will support you and depend on you.
        </>
      )
    }
  ]
}

export const jobs: JobsProps = {
  id: 'jobs.jobsopen',
  title: 'Open positions',
  description: (
    <>
      Today, Ory powers organizations of all sizes — from single-person startups
      to multinational enterprises - and we are only just getting started. We
      are looking for talented, creative people to build the future of Ory!
    </>
  )
}

export const values: HeroFeatureProps = {
  id: 'jobs.values',
  thin: true,
  small: true,
  title: 'Our Core Values',
  textbox: [
    {
      title: <>Innovation</>,
      description: (
        <>
          Building an enterprise-grade, globally scalable, secure infrastructure
          around Identity Management means thinking out-of-the-box. We need to
          embrace leading-edge technology, new ways of thinking, and redefining
          business processes to innovate the market on how to solve some of its
          most fundamental challenges. Ory's aim is no less than to lead the
          market in state-of-the-art solutions for future-proof Identity
          Management. Innovation is part of our DNA.
        </>
      )
    },
    {
      title: <>Commitment</>,
      description: (
        <>
          At Ory, we truly believe in building great products. Products, that
          matter. Products, that are relevant for our customers. Products, that
          help customers scale their business without limits. We take pride in
          breaking boundaries, constantly improving, and aiming to produce great
          work in order to win the market. Creating value for our customers
          comes first. Our mission is excellence.
        </>
      )
    },
    {
      title: <>Respect</>,
      description: (
        <>
          We are passionate about creating and delivering meaningful work. This
          is only possible as a team: Ory as a company, Ory together with our
          customers, and Ory as part of a larger community. Giving back to the
          community we serve also means being committed to working hard to take
          on challenges, approaching problems with humility – and deep respect
          for diversity in business, culture, and society. Together we build the
          products that can serve a purpose.
        </>
      )
    },
    {
      title: <>Honesty</>,
      description: (
        <>
          We can contribute most effectively when we communicate openly and
          honestly - learning both from our successes and our failures.
          Listening to our customers and or employees. Continuously learning,
          adapting, and growing our business on a healthy foundation. Openness
          and sincerity are the heart and soul of Ory.
        </>
      )
    }
  ]
}

export const quickstart: QuickstartProps = {
  id: 'jobs.quickstart',
  title: <>Be part of a global community</>,
  description: (
    <>
      Explore the Ory ecosystem and the work we do in open source. Participate
      in discussions and contribute directly to Ory on GitHub. We love hiring
      open source contributors to work with us full time.
    </>
  ),
  buttons: (
    <>
      <Button
        style={'filled'}
        to={'/docs/ecosystem/community'}
        iconRight={BookOpen}
      >
        Community Overview
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
