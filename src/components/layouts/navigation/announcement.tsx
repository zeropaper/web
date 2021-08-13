import { useLocation } from '@reach/router'
import cn from 'classnames'
import React, { useState } from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'

import * as styles from './announcement.module.css'

interface Banner {
  text: string
  link: string
  lengthy: boolean
  hide: () => void
}

export interface PropTypes {
  shortText: string
  longText: string
  link: string
}

const localStorageKey = 'header:announcementIsHidden'

const ArrowRight = <i className="ph-arrow-right-bold themed-primary size16" />

const AnnouncementBanner = ({ text, link, lengthy, hide }: Banner) => (
  <Container
    className={cn(styles.announcement, 'background-is-themed')}
    justify={'center'}
    alignItems={'center'}
    xsHidden={lengthy}
    smHidden={!lengthy}
    mdHidden={!lengthy}
    lgHidden={!lengthy}
  >
    <Button style={'link'} to={link} sideEffect={hide} iconRight={ArrowRight}>
      {text}
    </Button>
  </Container>
)

const Announcement = ({ longText, shortText, link }: PropTypes) => {
  const hasWindow = typeof window !== 'undefined'
  const location = useLocation()

  let sinceHidden = 0
  if (hasWindow) {
    sinceHidden = Number(window.localStorage.getItem(localStorageKey) || 0)
  }

  const [hidden, setHidden] = useState(
    sinceHidden !== 0 &&
      new Date().getTime() - sinceHidden < 1000 * 60 * 60 * 24
  )

  const hide = () => {
    if (hasWindow) {
      window.localStorage.setItem(localStorageKey, String(new Date().getTime()))
    }

    setHidden(true)
  }

  if (location.pathname == link || hidden) {
    return null
  }

  return (
    <>
      <AnnouncementBanner
        text={longText}
        link={link}
        lengthy={true}
        hide={hide}
      />
      <AnnouncementBanner
        text={shortText}
        link={link}
        lengthy={false}
        hide={hide}
      />
    </>
  )
}

export default Announcement
