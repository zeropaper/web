import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import { PropTypes } from './hero-form'

export const heroFormOreilly: PropTypes = {
  id: 'oreillyReport',
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
          'https://ory.sh/resources/oreilly/identity_in_modern_applications-ory.pdf'
      },
      { type: 'hidden', name: 'lead_source', value: 'Oreilly Report' },
      {
        id: 'last_name',
        name: 'last_name',
        type: 'text',
        placeholder: 'Name',
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
        type: 'submit',
        name: 'submit',
        value: 'Download Report'
      }
    ]
  },
  image: (
    <StaticImage
      src="../../../images/resources/oreilly/oreilly.png"
      loading="lazy"
      alt="Overview of the Ory Console"
      className="responsive"
    />
  )
}
