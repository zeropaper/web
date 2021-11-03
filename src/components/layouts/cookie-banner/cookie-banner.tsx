import React, { useState, useEffect } from 'react'

import { trackEvent } from '../../../analytics'
import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'

import tracks from './tracks'

import * as styles from './cookie-banner.module.css'

/*
const getCookie = (cname: string) => {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

const setCookie = (name: string, value: string, keep: number) => {
  const d = new Date()
  d.setTime(d.getTime() + keep * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

const onAccept = () => {
  if (getCookie('gdpr_cookie_analytics') !== 'true') {
    setCookie('gdpr_cookie_analytics', 'true', 365)
    setTimeout(() => window.location.reload(), 10)
  }
}
*/

const CookieBanner = () => {
  const [isBannerShown, setBannerVisibility] = useState(false)
  const [isStatisticsEnabled, setIsStatisticsEnabled] = useState(true)

  const savePreferences = () => {
    localStorage.setItem('analytics-preferences-set', 'true')
    trackEvent(tracks.optOut)
    setBannerVisibility(false)
  }

  useEffect(() => {
    const bannerPreferencesSet = !(
      localStorage.getItem('analytics-preferences-set') === 'true'
    )

    setBannerVisibility(bannerPreferencesSet)
  }, [])

  return isBannerShown ? (
    <div
      role="dialog"
      aria-modal="false"
      aria-describedby="cookie-banner-context"
      className={styles.banner}
    >
      <Container fluid>
        <div className={styles.bannerContent}>
          <p id="cookie-banner-context">
            Please select your cookie preferences
          </p>
          <label htmlFor="c-necessary">
            <input id="c-necessary" type="checkbox" checked disabled />
            Necessary
          </label>
          <label htmlFor="c-statistics">
            <input
              id="c-statistics"
              type="checkbox"
              checked={isStatisticsEnabled}
              onChange={() => setIsStatisticsEnabled(!isStatisticsEnabled)}
            />
            Statistics
          </label>
        </div>
        <div className={styles.bannerContent}>
          <Button to="/privacy" className={styles.privacyLink} style="link">
            Privacy Policy
          </Button>
          <Button sideEffect={savePreferences} to={() => {}} style="filled">
            Accept
          </Button>
        </div>
      </Container>
    </div>
  ) : null
}

export default CookieBanner
