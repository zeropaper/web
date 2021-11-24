import React from 'react'

import Button from '../components/freestanding/button/button'
import CodeBox, {
  Languages,
  PropTypes as CodeBoxProps
} from '../components/freestanding/codebox/codebox'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as FeaturelistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as HeroImageProps } from '../components/layouts/hero/hero-image'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

import Keto from '../images/keto/keto.svg'
import KetoSDK from '../images/keto/keto_p.svg'

const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const ArrowRight = <i className={'ph-arrow-right-bold size16'} />
const PlusCircle = <i className={'ph-plus-circle-fill base-grey-400 size16'} />

export const seo: SeoProps = {
  description:
    'Authorization Server based on Google Zanzibar, providing RBAC, ABAC and ACL.',
  title: 'Ory Keto - Permission and Role Management'
}

export const hero: HeroImageProps = {
  id: 'keto.hero',
  title: (
    <>
      <span className={'is-mute-text'}>Access Control - </span> global,
      granular, lightning-fast
    </>
  ),
  description:
    'Manage user roles, rights, and permissions with access-control lists.',
  buttons: [
    {
      ctaTitle: 'Get Started',
      style: 'filled',
      to: '/keto/docs/quickstart/'
    }
  ],
  image: (
    <img
      className="responsive"
      loading="lazy"
      alt="Example use of Keto authorisation methods inside a UI"
      src={Keto}
    />
  )
}

export const featureList: FeaturelistProps = {
  id: 'keto.featurelist',
  slant: true,
  features: [
    {
      title: 'Features',
      description: (
        <>
          Control who can access what in your application. Ory Keto serves
          answers at scale globally with low latency.
        </>
      ),
      button: (
        <Button
          style={'link'}
          to={'/docs/keto/quickstart/'}
          iconRight={ArrowRight}
        >
          Get started
        </Button>
      ),
      features: [
        {
          title: 'Manage and Check Permissions',
          description: (
            <>
              Determine if an entity (user, service, IoT) is allowed to perform
              an action using HTTP or gRPC APIs.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Low Latency and Highly Available',
          description: (
            <>
              Ory Keto is based on Zanzibar, which has maintained
              95th-percentile latency of less than 10 ms and availability
              greater than 99.99% over years of production use.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Flexible Permission Management',
          description: (
            <>
              Ory Keto integrates with any existing data structures and
              identifiers.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Global Access Control',
          description: (
            <>
              Coming soon: Deploy around the globe and provide a fast response
              no matter where your users are.
            </>
          ),
          icon: PlusCircle
        },
        {
          title: 'Strong Consistency',
          description: (
            <>
              Coming soon: Provide a straightforward user experience by serving
              strong consistent responses using{' '}
              <Button
                style={'link-inline'}
                to={'https://github.com/ory/keto/issues/517'}
              >
                snaptokens
              </Button>
              .
            </>
          ),
          icon: PlusCircle
        }
      ]
    }
  ]
}

export const featureContentCodeBox: CodeBoxProps = {
  tabs: [
    {
      filename: 'curl.sh',
      language: Languages.Shell,
      code: `curl -G \\
     --data-urlencode "subject=john" \\
     --data-urlencode "relation=access" \\
     --data-urlencode "namespace=files" \\
     --data-urlencode "object=file_a" \\
     http://keto-read-api/check`
    },
    {
      filename: 'index.js',
      language: Languages.JavaScript,
      code: `import ...

const checkClient = new checkService.CheckServiceClient('keto-read-api')

const checkRequest = new checkData.CheckRequest()
checkRequest.setNamespace('files')
checkRequest.setObject('file_a')
checkRequest.setRelation('access')

const sub = new acl.Subject()
sub.setId('john')
checkRequest.setSubject(sub)

checkClient.check(checkRequest, (error, resp) => {
  if (error) {
    console.log('Encountered error:', error)
  } else {
    console.log(resp.getAllowed() ? 'Allowed' : 'Denied')
  }
})`
    },
    {
      filename: 'main.go',
      language: Languages.Go,
      code: `package main

import (...)

func main() {
\tconn, err := grpc.Dial("keto-read-api")
\tif err != nil {
\t\tpanic(err.Error())
\t}

\tclient := acl.NewCheckServiceClient(conn)

\tres, err := client.Check(context.Background(),
\t\t&acl.CheckRequest{
\t\t\tNamespace: "files",
\t\t\tObject:    "file_a",
\t\t\tRelation:  "access",
\t\t\tSubject: &acl.Subject{Ref: &acl.Subject_Id{
\t\t\t\tId: "john",
\t\t\t}},
\t\t},
\t})
\tif err != nil {
\t\tpanic(err.Error())
\t}

\tif res.Allowed {
\t\tfmt.Println("Allowed")
\t\treturn
\t}
\tfmt.Println("Denied")
}`
    }
  ]
}

export const featureContentCoding: FeatureContentProps = {
  id: 'keto.featurecontent.coding',
  slant: true,
  background: 'grey',
  overline: <>Global access control</>,
  title: (
    <>
      <span className={'is-mute-text'}>Split-second </span>decision making
    </>
  ),
  description: (
    <>
      Ory Keto is a consistent permission and authorization server with an easy
      and granular permission language, it is completely open source, and
      blazingly fast - globally. It is based on Google Zanzibar and ships gRPC
      and REST APIs.
    </>
  ),
  button: {
    ctaTitle: 'Visit the documentation',
    to: '/docs/keto/',
    iconRight: ArrowRight
  },
  content: <CodeBox {...featureContentCodeBox} />
}

export const featureContentSDK: FeatureContentProps = {
  id: 'keto.featurecontent.sdk',
  slant: true,
  background: 'dark',
  overline: 'Your language, our SDK',
  title: (
    <>
      <span className={'is-mute-text'}>Keto is</span> polyglot
    </>
  ),
  description: (
    <>
      Ory Keto is written in Go and we provide SDKs for every language. It works
      behind any framework and integrates with any existing data structures and
      identifiers. Our documentation makes integrating Ory Keto a piece of cake.
    </>
  ),
  button: {
    ctaTitle: 'Run the Quickstart',
    to: '/keto/docs/quickstart/',
    iconRight: ArrowRight
  },
  content: (
    <img
      className="responsive"
      loading="lazy"
      alt="Keto SDKs for any programming language"
      src={KetoSDK}
    />
  )
}
