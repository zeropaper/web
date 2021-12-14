import React from 'react'

import Button from '../components/freestanding/button/button'
import CodeBox, {
  Languages,
  PropTypes as CodeBoxProps
} from '../components/freestanding/codebox/codebox'
import { PropTypes as CodingProps } from '../components/layouts/coding/coding'
import { PropTypes as FeaturelistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

const Terminal = <i className="ph-terminal-fill size32" />
const GitMerge = <i className="ph-git-merge-fill size32" />
const ArrowRight = <i className="ph-arrow-right-bold size16" />
const PlusCircle = <i className={'ph-plus-circle-fill size16'} />

export const seo: SeoProps = {
  description:
    'Adopt a secure, modern IdP system for the cloud with open source from Ory. Fast, modular integration into any tech stack.',
  title: 'Ory - Open Source Identity Infrastructure For Everyone'
}

export const codingCodeBox: CodeBoxProps = {
  tabs: [
    {
      filename: '',
      language: Languages.Shell,
      code: `$ export ORY_ACCESS_TOKEN=RaEEZfMbx7QGuf0uWNt9c15NE4FG4OOW
$ ory identities list --project playground --format json-pretty  
[
  {
    "id": "7c7d040d-97f6-4a57-95e8-08c61e6df016",
    "schema_id": "default",
    "schema_url": "https://custom.domain.com/api/kratos/public/schemas/default",
    "traits": {
      "email": "alice@example.com"
    }
  },
    {
    "id": "7f6d040d-97c7-4a59-85e7-6df01608c61e",
    "schema_id": "default",
    "schema_url": "https://custom.domain.com/api/kratos/public/schemas/default",
    "traits": {
      "email": "stephan@example.com"
    }
  }
]`
    }
  ]
}

export const coding: CodingProps = {
  id: 'index.coding',
  slant: true,
  background: 'light-grey',
  overline: 'Modern tooling',
  title: (
    <>
      <span className={'is-mute-text'}>We're all about</span>
      {''} developer experience
    </>
  ),
  description: (
    <>
      SDKs for any language, clear documentation, tutorials, and community
      support are our standards. Our open-source approach also means you get to
      participate in API and architecture discussions - your next PR will be a
      part of Ory.
    </>
  ),
  button: {
    ctaTitle: 'Visit the documentation',
    to: '/docs/get-started',
    iconRight: ArrowRight
  },
  additional: {
    title: <>The CLI to get things done</>,
    description: (
      <>
        We love our CLI - it has everything you would want and that's why you'll
        love it, too. It works on all operating systems and CPUs.
      </>
    ),
    button: {
      ctaTitle: 'Install the CLI',
      to: '/docs/get-started',
      iconRight: ArrowRight
    }
  },
  codebox: <CodeBox {...codingCodeBox} />,
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

export const projectlist: FeaturelistProps = {
  id: 'opensource.projectlist',
  background: 'grey',
  slant: true,
  features: [
    {
      title: 'Ory Open Source Ecosystem',
      description: (
        <>
          Ory builds a rich and open ecosystem of tools and libraries for
          developers. If you find anything useful, be sure to leave a star to
          promote the project!
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'https://github.com/orgs/ory/repositories'}
          iconRight={ArrowRight}
        >
          Ory Repositories Overview
        </Button>
      ),
      features: [
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/dockertest'}
              >
                Dockertest
              </Button>
            </>
          ),
          description: (
            <>
              Dockertest helps you boot up docker images for your Go tests with
              minimal work.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/fosite'}
              >
                Fosite
              </Button>
            </>
          ),
          description: (
            <>
              Extensible OAuth 2.0 and OpenID Connect SDK for Go.{' '}
              <Button style={'link-inline'} to={'../hydra'}>
                Ory Hydra
              </Button>{' '}
              is based on this.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button style={'link-inline'} to={'https://github.com/ory/sdk'}>
                Ory SDKs
              </Button>
            </>
          ),
          description: (
            <>
              SDKs for all popular programming languages, generated using
              openapi-generator.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button style={'link-inline'} to={'https://github.com/ory/k8s'}>
                Ory Kubernetes Helm Charts
              </Button>
            </>
          ),
          description: (
            <>
              For a list of Helm charts and their configuration options please
              visit{' '}
              <Button style={'link-inline'} to={'https://k8s.ory.sh/helm/'}>
                k8s.ory.sh
              </Button>
              .
            </>
          ),
          icon: PlusCircle
        }
      ]
    },
    {
      title: 'Frontend Examples',
      description: (
        <>
          Example frontend applications as reference for developers. For Ory
          Kratos and Ory Hydra, written in React, ExpressJS, NodeJS, and NextJS.
        </>
      ),
      features: [
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/hydra-login-consent-node'}
              >
                Ory Hydra TypeScript/ExpressJS User & Consent Provider
              </Button>
            </>
          ),
          description: (
            <>
              Implementation for the ORY Hydra User Login and Consent interface
              written in TypeScript and ExpressJS.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/kratos-nextjs-react-example'}
              >
                Ory Kratos NextJS/React Single Page Application Example
              </Button>
            </>
          ),
          description: (
            <>
              Add login, registration, account recovery (password reset),
              account verification (email verification), social sign-in,
              multi-factor authentication to your NextJS/React App.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/kratos-selfservice-ui-react-native'}
              >
                Ory Kratos React Native User Interfaces
              </Button>
            </>
          ),
          description: (
            <>
              A React Native reference implementation of an app using ORY Kratos
              for login, sign up, profile settings, MFA/2FA, account recovery,
              and more.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/kratos-selfservice-ui-node'}
              >
                Ory Kratos NodeJS/ExpressJS User Interfaces
              </Button>
            </>
          ),
          description: (
            <>
              A reference implementation for Ory Kratos in
              NodeJS/ExpressJS/Handlebars/NextJS. It implements all Ory Kratos
              flows.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/kratos-selfservice-ui-react-nextjs'}
              >
                Ory Kratos React/NextJS User Interfaces
              </Button>
            </>
          ),
          description: (
            <>
              This repository contains a reference implementation for Ory
              Kratos' in ReactJS / NextJS. It implements all Ory Kratos flows
              (login, registration, account settings, account recovery, account
              verification).
            </>
          ),
          icon: PlusCircle
        }
      ]
    },
    {
      title: 'Tools & Libraries',
      description: (
        <>
          In-house open source tools and libraries that we use in development
          every day.
        </>
      ),
      features: [
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/herodot'}
              >
                Ory Herodot
              </Button>
            </>
          ),
          description: (
            <>
              A lightweight Go library for writing responses and errors to HTTP,
              serves millions of requests daily through Ory Hydra.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/graceful'}
              >
                Ory Graceful
              </Button>
            </>
          ),
          description: (
            <>
              Best practice HTTP server configurations and helpers for Go 1.8's
              HTTP graceful shutdown feature.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button style={'link-inline'} to={'https://github.com/ory/ladon'}>
                Ory Ladon
              </Button>
            </>
          ),
          description: (
            <>
              An SDK for access control policies: authorization for the
              microservice and IoT age. Inspired by AWS IAM policies.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/go-acc'}
              >
                Ory go-acc
              </Button>
            </>
          ),
          description: (
            <>
              A tool for reporting accurate Code Coverage in Golang. Cross
              platform (OsX, Windows, Linux).
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button style={'link-inline'} to={'https://github.com/ory/ci'}>
                Ory CI
              </Button>
            </>
          ),
          description: (
            <>
              Automation tooling and robots for Ory's Continous
              Integration/Delivery pipelines.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button style={'link-inline'} to={'https://github.com/ory/x'}>
                Ory X
              </Button>
            </>
          ),
          description: (
            <>
              Shared libraries used in the ORY ecosystem. Use at your own risk.
              Written in Go.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/encrypt-dir'}
              >
                Encrypt Dir
              </Button>
            </>
          ),
          description: (
            <>
              A very simple CLI helper that encrypts files in directories using
              AES-GCM (128bit).
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/prettier-styles'}
              >
                Ory Prettier Styles
              </Button>
            </>
          ),
          description: (
            <>
              The prettier config used by all ORY projects, on opinionated code
              styling focused on readability and clarity.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/redux-saga-fetch'}
              >
                Ory Redux Saga Fetch
              </Button>
            </>
          ),
          description: (
            <>
              A simple wrapper that reduces boilerplate code when using
              redux-saga in combination with async backend calls.
            </>
          ),
          icon: PlusCircle
        }
      ]
    },
    {
      title: 'GitHub Actions',
      description: (
        <>
          Ory maintained automation for GitHub. Automate your GitHub workflows
          in Ory style.
        </>
      ),
      features: [
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/closed-reference-notifier'}
              >
                Closed Reference Notifier
              </Button>
            </>
          ),
          description: (
            <>
              A GitHub action to open an issue when GitHub references in your
              code are closed.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/build-buf-action'}
              >
                Build Buf Action
              </Button>
            </>
          ),
          description: (
            <>
              A GitHub action for working with protocol buffers, to build and
              lint protobuf using buildbuf.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/milestone-action'}
              >
                Milestone Action
              </Button>
            </>
          ),
          description: (
            <>
              Generates a markdown document based on milestones, issues, pull
              requests, and labels.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/label-sync-action'}
              >
                Label Sync
              </Button>
            </>
          ),
          description: (
            <>
              A GitHub action that synchronizes issue labels across GitHub
              repositories.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: (
            <>
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/actions'}
              >
                Ory Actions
              </Button>
            </>
          ),
          description: (
            <>
              Scripts for automating regular Ory CI tasks: Generating SDKs and
              changelogs as well as releasing new versions.
            </>
          ),
          icon: PlusCircle
        }
      ]
    }
  ]
}
