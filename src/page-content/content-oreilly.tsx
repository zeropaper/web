import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as FormProps } from '../components/layouts/hero/hero-form'
import { PropTypes as QuickstartProps } from '../components/layouts/quickstart/quickstart'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

const SlackLogo = <i className={' ph-slack-logo-fill themed-primary size32'} />
const ChatsCircle = (
  <i className={'ph-chats-circle-fill themed-primary size32'} />
)
const Fingerprint = (
  <i className={' ph-fingerprint-fill themed-primary size32'} />
)
const Key = <i className={' ph-key-bold themed-primary size32'} />
const UsersBold = <i className={'ph-users-bold themed-primary size32'} />
const MapTrifold = (
  <i className={' ph-map-trifold-bold themed-primary size32'} />
)
export const seo: SeoProps = {
  description: 'Identity In Modern Applications - Download the free eBook.',
  title: "Ory O'Reilly - Identity In Modern Applications  Book"
}

export const form: FormProps = {
  id: 'oreilly.form',
  title: 'Identity Management and beyond',
  description:
    'This free ebook is the only primer you need to understand identity in modern applications, why access security is crucial and how to work with trust systems.',
  formProps: {
    action:
      'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
    method: 'POST',
    content: [
      { type: 'hidden', name: 'oid', value: '00D5e000001NdzZ' },
      {
        type: 'hidden',
        name: 'retURL',
        value:
          'https://ory.sh/resources/oreilly/identity_in_modern_applications-ory.pdf?mtm_campaign=oreilly-download'
      },
      { type: 'hidden', name: 'lead_source', value: 'Oreilly Report' },
      {
        id: 'first_name',
        name: 'first_name',
        type: 'text',
        placeholder: 'First Name',
        required: true
      },
      {
        id: 'last_name',
        name: 'last_name',
        type: 'text',
        placeholder: 'Last Name',
        required: true
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        placeholder: 'Email Address',
        required: true
      },
      {
        id: 'company',
        name: 'company',
        type: 'text',
        placeholder: 'Company Name',
        required: true
      },
      {
        id: 'title',
        name: 'title',
        type: 'text',
        placeholder: 'Position'
      },
      {
        id: 'marketingoptin',
        name: '00N5e00000cv3rN',
        type: 'checkbox',
        label: ' Keep me in the loop on Ory news.',
        value: '1'
      },
      {
        type: 'submit',
        name: 'submit',
        value: 'Download Report'
      }
    ]
  },
  image: (
    <StaticImage
      src="../images/resources/oreilly/oreilly.png"
      loading="lazy"
      alt="Identity in modern Applications by Lee Atchison, published by O'Reilly"
      className="responsive"
    />
  )
}

export const quickstart: QuickstartProps = {
  id: 'oreilly.quickstart',
  title: <>Identity In Modern Applications</>,
  description: (
    <>
      Learn how identity technology is constantly evolving to keep up with
      modern software development. Understand how systems of trust play a role
      in creating secure apps and systems.
    </>
  ),
  buttons: (
    <>
      <Button style={'filled'} to={`#${form.id}`}>
        Get the report
      </Button>
    </>
  ),
  content: [
    {
      icon: Fingerprint,
      title: <>Mapping Identity</>,
      description: (
        <>
          Learn about the methods of mapping a person, place, or thing to a
          software resource in a verifiable manner.
        </>
      )
    },
    {
      icon: MapTrifold,
      title: <>Examples</>,
      description: (
        <>
          Explore real-world examples of authentication methods and best
          practices.
        </>
      )
    },
    {
      icon: Key,
      title: <>AuthN/AuthZ</>,
      description: (
        <>
          Understand authentication, authorization, the differences, and why
          every method has its flaws.
        </>
      )
    },
    {
      icon: UsersBold,
      title: <>Single Or Multi?</>,
      description: (
        <>
          Learn more about the differences between single-factor and multifactor
          authentication.
        </>
      )
    }
  ]
}
