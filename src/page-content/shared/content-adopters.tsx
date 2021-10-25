import React from 'react'

import { PropTypes as AdoptersProps } from '../../components/layouts/adopters/adopters'

import amorevino from '../../images/adopters/amorevino.svg'
import blues from '../../images/adopters/blues.svg'
import contraste from '../../images/adopters/contraste.svg'
import discogs from '../../images/adopters/discogs.svg'
import hootsuite from '../../images/adopters/hootsuite.svg'
import kyma from '../../images/adopters/kyma.svg'
import padis from '../../images/adopters/padis.svg'
import raspberrypi from '../../images/adopters/raspberrypi.svg'
import sainsburys from '../../images/adopters/sainsburys.svg'
import segment from '../../images/adopters/segment.svg'

export const sharedAdopters: AdoptersProps = {
  id: 'shared.adopters',
  adopters: [
    {
      title: 'BluesWireless',
      image: blues,
      url: 'https://blues.io/'
    },
    {
      title: 'Segment',
      image: segment,
      url: 'https://segment.com/'
    },
    {
      title: `Sainsbury's`,
      image: sainsburys,
      url: 'https://www.sainsburys.co.uk/'
    },
    {
      title: 'Raspberry Pi',
      image: raspberrypi,
      url: 'https://www.raspberrypi.org/'
    },
    {
      title: `Amorevino`,
      image: amorevino,
      url: 'https://www.amorevino.com/'
    },
    {
      title: `Discogs`,
      image: discogs,
      url: 'https://www.discogs.com/'
    },
    {
      title: 'Hootsuite',
      image: hootsuite,
      url: 'https://hootsuite.com'
    },
    {
      title: 'Kyma Project',
      image: kyma,
      url: 'https://kyma-project.io/'
    },
    {
      title: 'Padis',
      image: padis,
      url: 'https://padis.io/'
    },
    {
      title: 'Contraste Digital',
      image: contraste,
      url: 'https://www.contraste.com/en/digital'
    }
  ]
}
