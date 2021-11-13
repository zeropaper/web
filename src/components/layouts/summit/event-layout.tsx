import React from 'react'

import { verticalNav } from '../../../page-content/events/content-summit-21'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import VerticalNav from './vertical-nav'

import * as styles from './event-layout.module.css'

interface PropTypes {
  children: React.ReactNode
}

const EventLayout = ({ children }: PropTypes) => (
  <Grid lg={12} md={12} sm={12} xs={12}>
    <Container
      className={styles.container}
      fluid={true}
      justify="space-between"
      alignItems={'start'}
    >
      <Grid lg={3} md={3} sm={12} xs={12} className={styles.nav}>
        <VerticalNav {...verticalNav} />
      </Grid>
      <Grid lg={9} md={9} sm={12} xs={12} className={styles.content}>
        {children}
      </Grid>
    </Container>
  </Grid>
)

export default EventLayout
