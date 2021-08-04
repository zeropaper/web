import React from 'react'

import CodeBox, { Languages } from '../components/codebox'
import Button from '../components/freestanding/button/button'
import Adopters from '../components/layouts/adopters/adopters'
import { adoptersDefault } from '../components/layouts/adopters/adopters-content'
import FeatureContent from '../components/layouts/feature-image/feature-content'
import FeatureList from '../components/layouts/featurelist/feature-list'
import { featureListKeto } from '../components/layouts/featurelist/feature-list-content'
import Hero from '../components/layouts/hero/hero'
import { heroKeto } from '../components/layouts/hero/hero-content'
import Layout from '../components/layouts/layout/layout'
import Quickstart from '../components/layouts/quickstart/quickstart'
import { quickstartOpenSource } from '../components/layouts/quickstart/quickstart-content'
import Quotes from '../components/layouts/quotes/quotes'
import { quotesDefault } from '../components/layouts/quotes/quotes-content'
import SEO from '../components/layouts/seo/seo'
import Stats from '../components/layouts/stats/stats'
import { statsDefault } from '../components/layouts/stats/stats-content'
import Newsletter from '../components/newsletter'

import ketoProcess from '../images/keto/keto.svg'
import ketoPolyglot from '../images/keto/keto_p.svg'

const IntegrationCodeBox = () => (
  <CodeBox
    tabs={[
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
      }
    ]}
  />
)

const IndexPage = () => {
  const ArrowRight = <i className={'ph-arrow-right-bold size16'} />

  return (
    <Layout theme={'keto'}>
      <SEO
        description={
          'Authorization Server based on Google Zanzibar, providing RBAC, ABAC and ACL.'
        }
        title={`Ory Keto - Permission and Role Management`}
      />
      <Hero {...heroKeto} />

      <Newsletter preselect="keto" />

      <FeatureList {...featureListKeto} />

      <FeatureContent
        overline={'Start in minutes'}
        title={<>Easy Integration</>}
        description={
          <>
            Ory Keto is an open source global and consistent permission &
            authorization server with an easy and granular permission language
            and low latency. It is based on Google Zanzibar, written in Go, and
            ships gRPC and REST APIs.
          </>
        }
        buttons={
          <>
            <Button to={'/docs/keto/'} style={'link'} iconRight={ArrowRight}>
              Check out the documentation
            </Button>
          </>
        }
        content={<IntegrationCodeBox />}
      />

      <FeatureContent
        overline={'Polyglot'}
        title={<>SDKs for all languages</>}
        description={
          <>
            Ory Keto is written in Go and we provide SDKs for every language.
            Our documentation makes integrating Ory / Keto a snap.
          </>
        }
        buttons={
          <>
            <Button
              to={'/keto/docs/quickstart/'}
              style={'link'}
              iconRight={ArrowRight}
            >
              Run the Quickstart
            </Button>
          </>
        }
        content={
          <img
            className="responsive"
            loading="lazy"
            alt="Keto SDKs for any programming language"
            src={ketoPolyglot}
          />
        }
      />
      <Quotes {...quotesDefault} />
      <Adopters {...adoptersDefault} />
      <Stats {...statsDefault} />
      <Quickstart {...quickstartOpenSource} />
    </Layout>
  )
}

export default IndexPage
