import cn from 'classnames'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import * as styles from './vertical-nav.module.css'

import orySummitSmall from '../../../images/events/summit/summit21-logo-small.svg'
import orySummit from '../../../images/events/summit/summit21-logo.svg'

export interface PropTypes {
  id: string
  year: number
  menuItems: Array<menuItems>
}

interface menuItems {
  menuItem: string
  to: string
  openInNewWindow?: boolean
}

const VerticalNav = ({ id, year, menuItems }: PropTypes) => (
  <div id={id} className={styles.verticalNav}>
    <Container
      alignItems={'start'}
      justify={'space-between'}
      className={styles.navColumn}
    >
      <Container
        justify={'start'}
        alignItems={'start'}
        className={cn(styles.navLogo)}
      >
        <Button
          to={`/summit/${year}`}
          style={'none'}
          className={styles.navLogo}
        >
          <Grid xsHidden={true} smHidden={true}>
            <img src={orySummit} loading={'eager'} alt={'Ory logo'} />
          </Grid>
          <Grid lgHidden={true} mdHidden={true}>
            <img src={orySummitSmall} loading={'eager'} alt={'Ory logo'} />
          </Grid>
        </Button>
      </Container>
      <Container
        alignItems={'start'}
        className={cn(styles.navColumn, styles.navMenu)}
      >
        <Grid xsHidden={true} smHidden={true}>
          <p className={styles.navHeading}>The Ory Developer Conference</p>
          <p className={styles.navTagline}>28-29 October 2021</p>
        </Grid>
        {menuItems.map(({ menuItem, to, openInNewWindow }, index) => (
          <Button
            key={index}
            to={to}
            openInNewWindow={openInNewWindow}
            style={'navigation'}
          >
            {menuItem}
          </Button>
        ))}
        <Grid xsHidden={true} smHidden={true} className={styles.socials}>
          <Button
            to="https://www.youtube.com/channel/UC9hCxZZeviexX0GclD0brrw"
            openInNewWindow={true}
            style={'navigation'}
          >
            <i className={'ph-youtube-logo-fill size24'} />
          </Button>
          <Button
            to="https://twitter.com/orycorp"
            openInNewWindow={true}
            style={'navigation'}
          >
            <i className={'ph-twitter-logo-fill size24'} />
          </Button>
          <Button
            to="https://slack.ory.sh"
            openInNewWindow={true}
            style={'navigation'}
          >
            <i className={'ph-slack-logo-fill size24'} />
          </Button>
        </Grid>
      </Container>
    </Container>
  </div>
)

export default VerticalNav
