import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import SmallText from '../simple-text/small-text'

import { pb64 } from '../../freestanding/utils/padding.module.css'
import * as styles from './team.module.css'

export interface PropTypes {
  id: string
  background?: 'dark' | 'grey' | 'light-grey' | 'themed'
  slant?: boolean
  title: string | React.ReactElement
  text: string | React.ReactElement
  img: any
}

const TeamImage = ({ id, background, slant, title, text, img }: PropTypes) => (
  <div
    id={id}
    className={cn(
      styles.team,
      styles.teamImage,
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
        <SmallText title={title} text={text} className={pb64} />
        <Container alignItems={'start'} justify={'start'}>
          <Grid lg={12} md={12} sm={12} xs={12}>
            {img}
          </Grid>
        </Container>
      </Grid>
    </Container>
  </div>
)

export default TeamImage
