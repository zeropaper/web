import React from 'react'

import { PropTypes as StatsProps } from '../../components/layouts/stats/stats'

export const sharedStats: StatsProps = {
  id: 'shared.stats',
  title: <>Billions of Identities</>,
  description: (
    <>
      Companies from all over the world rely on Ory for their identity needs.
      Ory technology secures billions of identity requests.
    </>
  )
}
