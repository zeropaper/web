import cn from 'classnames'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import SmallText from '../simple-text/small-text'

import {
  pb16,
  pb64,
  pb8,
  pr8
} from '../../freestanding/utils/padding.module.css'
import * as styles from './team.module.css'

export interface PropTypes {
  id: string
  background?: 'dark' | 'grey' | 'light-grey' | 'themed'
  slant?: boolean
  title: string | React.ReactElement
  text: string | React.ReactElement
  team: Array<Profiles>
}

interface Profiles {
  name: string
  position: string
  img: any
  social: SocialLinks[]
}

export enum SocialNetworks {
  twitter,
  github,
  linkedin,
  instagram,
  web
}

type SocialLinks = {
  network: SocialNetworks
  href: string
}

type resolvedSocial = {
  Icon: React.ReactElement
  href: string
  alt: string
}

const socialWithIcon = ({ href, network }: SocialLinks): resolvedSocial => {
  let Icon: resolvedSocial['Icon']
  let alt
  switch (network) {
    case SocialNetworks.github:
      Icon = <i className="ph-github-logo-fill size24" />
      alt = 'GitHub'
      break
    case SocialNetworks.linkedin:
      Icon = <i className="ph-linkedin-logo-fill size24" />
      alt = 'Linkedin'
      break
    case SocialNetworks.twitter:
      Icon = <i className="ph-twitter-logo-fill size24" />
      alt = 'Twitter'
      break
    case SocialNetworks.instagram:
      Icon = <i className="ph-instagram-logo-fill size24" />
      alt = 'Instagram'
      break
    case SocialNetworks.web:
      Icon = <i className="ph-globe-fill size24" />
      alt = 'Website'
      break
  }

  return {
    href,
    Icon,
    alt
  }
}

const Profile = ({ name, position, img, social }: Profiles) => (
  <Container
    fluid={true}
    alignItems={'start'}
    justify={'start'}
    className={cn(styles.profile)}
  >
    <Grid lg={12} md={12} sm={12} xs={12} className={cn('font-h5', pb16)}>
      {img}
    </Grid>
    <Grid lg={12} md={12} sm={12} xs={12} className={cn(styles.profileInfo)}>
      <div>
        <h3 className={cn('font-h5')}>{name}</h3>
        <p className={cn('font-p', 'is-monospace', pb8)}>
          {' '}
          <span className={cn('is-themed-primary')}>&gt; </span>
          {position}
        </p>
      </div>
      <div>
        <Container flexContainer={'row'} justify={'start'}>
          {social.map(socialWithIcon).map(({ Icon, href }) => (
            <Button
              key={href}
              to={href}
              style={'icon'}
              openInNewWindow={true}
              className={pr8}
            >
              {Icon}
            </Button>
          ))}
        </Container>
      </div>
    </Grid>
  </Container>
)

const Team = ({ id, background, slant, title, text, team }: PropTypes) => (
  <div
    id={id}
    className={cn(
      styles.team,
      {
        ['background-is-grey']: background === 'grey',
        ['background-is-dark']: background === 'dark',
        ['background-is-light-grey']: background === 'light-grey',
        ['background-is-themed']: background === 'themed'
      },
      { ['is-slanted-top-larger']: slant === true }
    )}
  >
    <Container fluid={true} justify={'center'} alignItems={'start'}>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <SmallText small={false} title={title} text={text} className={pb64} />
        <Container alignItems={'start'} justify={'start'}>
          {team.map((profile, index) => (
            <Grid
              lg={3}
              md={3}
              sm={6}
              xs={6}
              key={index}
              className={cn(styles.teamContent)}
            >
              <Profile {...profile} />
            </Grid>
          ))}
        </Container>
      </Grid>
    </Container>
  </div>
)

export default Team
