import { useLocation } from '@reach/router'
import cn from 'classnames'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'

import * as styles from './announcement.module.css'

interface Banner {
  text: string
  link: string
  lengthy: boolean
}

export interface PropTypes {
  shortText: string
  longText: string
  link: string
  className?: string
}

const ArrowRight = <i className="ph-arrow-right-bold themed-primary size16" />

const AnnouncementBanner = ({ text, link, lengthy }: Banner) => (
  <Container
    className={cn(styles.announcement, 'background-is-dark')}
    justify={'center'}
    alignItems={'center'}
    xsHidden={lengthy}
    smHidden={!lengthy}
    mdHidden={!lengthy}
    lgHidden={!lengthy}
  >
    <Button style={'link'} to={link} iconRight={ArrowRight}>
      {text}
    </Button>
  </Container>
)

const Announcement = ({ longText, shortText, link, className }: PropTypes) => {
  const location = useLocation()

  if (location.pathname.replace(/\/+$/, '') === link.replace(/\/+$/, '')) {
    return null
  }

  return (
    <div className={className}>
      <AnnouncementBanner text={longText} link={link} lengthy={true} />
      <AnnouncementBanner text={shortText} link={link} lengthy={false} />
    </div>
  )
}

export default Announcement
