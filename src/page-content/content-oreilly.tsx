import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import { PropTypes as FormProps } from '../components/layouts/hero/hero-form'
import { PropTypes as QuickstartProps } from '../components/layouts/quickstart/quickstart'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

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
  slant: true,
  title: <>Identity In Modern Applications</>,
  description: (
    <>
      Learn how identity technology is constantly evolving to keep up with
      modern software development. Understand how systems of trust play a role
      in creating secure apps and systems.
    </>
  ),
  buttons: [
    {
      ctaTitle: 'Download the report',
      style: 'filled',
      to: `#${form.id}`
    }
  ],
  content: [
    {
      title: <>Mapping Identity</>,
      description: (
        <>
          Learn about the methods of mapping a person, place, or thing to a
          software resource in a verifiable manner.
        </>
      )
    },
    {
      title: <>Examples</>,
      description: (
        <>
          Explore real-world examples of authentication methods and best
          practices.
        </>
      )
    },
    {
      title: <>AuthN/AuthZ</>,
      description: (
        <>
          Understand authentication, authorization, the differences, and why
          every method has its flaws.
        </>
      )
    },
    {
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
