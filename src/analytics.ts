export interface IEvent {
  category: string
  action: string
  origin: string
}

export interface IEvents {
  [key: string]: IEvent
}

declare global {
  interface Window {
    plausible: any
    _paq: any
    _iub: any
  }
}

export const trackEvent = (event: IEvent) => {
  if (window.plausible) {
    window.plausible(event.action)
  }
  if (window._paq) {
    window._paq.push(['trackEvent', event.category, event.action, event.origin])
  }
}

const loadConsentBanner = () => {
  const dependencies = [
    'https://cdn.iubenda.com/cs/ccpa/stub.js',
    'https://cdn.iubenda.com/cs/iubenda_cs.js'
  ]

  return Promise.all(
    dependencies.map((url) => {
      const script = document.createElement('script')
      script.src = url
      document.body.appendChild(script)
      return new Promise<void>((resolveLoad) => {
        script.onload = () => resolveLoad()
      })
    })
  )
}

const allowAdvancedGoogleAnalytics = () => {
  console.log('init GA')
}

const eventsOnBannerInteraction = {
  onConsentGiven: allowAdvancedGoogleAnalytics,
  onConsentFirstGiven: () =>
    trackEvent({
      category: 'Consent',
      action: 'AcceptCookies',
      origin: 'Accept button in cookie banner'
    }),
  onConsentFirstRejected: () =>
    trackEvent({
      category: 'Consent',
      action: 'RejectCookies',
      origin: 'Reject button in cookie banner'
    })
}

export const init = () => {
  const _iub = window._iub || {}
  _iub.csConfiguration = {
    enableCcpa: true,
    countryDetection: true,
    consentOnContinuedBrowsing: false,
    ccpaAcknowledgeOnDisplay: true,
    lang: 'en',
    siteId: 2407170,
    floatingPreferencesButtonDisplay: false,
    cookiePolicyId: 17136025,
    privacyPolicyUrl: '/privacy',
    cookiePolicyUrl: '/cookies',
    callback: eventsOnBannerInteraction,
    banner: {
      acceptButtonDisplay: true,
      customizeButtonDisplay: true,
      acceptButtonColor: '#5528ff',
      acceptButtonCaptionColor: 'white',
      customizeButtonColor: '#cbcbcb',
      customizeButtonCaptionColor: '#010101',
      rejectButtonDisplay: true,
      rejectButtonColor: '#5528ff',
      rejectButtonCaptionColor: 'white',
      position: 'float-bottom-center',
      textColor: '#010101',
      backgroundColor: '#ffffff'
    }
  }
  window._iub = _iub

  loadConsentBanner().then(() => {})
}
