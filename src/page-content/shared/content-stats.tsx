import React from 'react'

import { PropTypes as StatsProps } from '../../components/layouts/stats/stats'

export const sharedStats: StatsProps = {
  id: 'shared.stats',
  background: 'themed',
  slant: true,
  title: <>Billions of Identities</>,
  description: (
    <>
      Companies from all over the world rely on Ory for their identity needs.
      We provides businesses and organizations with a set of hardened infrastructure, 
      so you can operate and scale efficiently and rely on a stable backbone.
      Our zero-trust infrastructure network secures billions of requests every month.
    </>
  )
}
