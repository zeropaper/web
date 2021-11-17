export interface IEvent {
  category: string
  action: string
  origin: string
}

export interface IEvents {
  [key: string]: IEvent
}

enum ConsentCategory {
  Necessary = '1',
  Basic = '2',
  Enhancement = '3',
  Measurement = '4',
  Advertising = '5'
}

declare global {
  interface Window {
    plausible: any
    _paq: any
    _iub: any
    dataLayer: any
  }
}

const googleTag = (name: string, arg?: any) => {
  arg ? window.dataLayer.push(name) : window.dataLayer.push(name, arg)
}

export const trackEvent = (event: IEvent) => {
  if (window.plausible) {
    window.plausible(event.action)
  }
  if (window._paq) {
    window._paq.push(['trackEvent', event.category, event.action, event.origin])
  }
  if (window.dataLayer) {
    googleTag(event.action)
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

const loadGoogleAnalytics = () => {
  const script = document.createElement('script')
  script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-71865250-1'
  document.body.appendChild(script)
  return new Promise<void>((resolve) => {
    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      googleTag('js', new Date())
      googleTag('config', 'UA-71865250-1')
      resolve()
    }
  })
}

const eventsOnBannerInteraction = {
  // Triggers on every page visit
  onPreferenceExpressed: (consent: any = {}) => {
    // If measurement = accepted
    if (consent.purposes && consent.purposes[ConsentCategory.Measurement]) {
      loadGoogleAnalytics()
    }
  },
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
    perPurposeConsent: true,
    // https://www.iubenda.com/en/help/1205-how-to-configure-your-cookie-solution-advanced-guide
    purposes: `${ConsentCategory.Necessary}, ${ConsentCategory.Basic}, ${ConsentCategory.Enhancement}, ${ConsentCategory.Measurement}, ${ConsentCategory.Advertising}`,
    cookiePolicyId: 17136025,
    privacyPolicyUrl: '/privacy',
    cookiePolicyUrl: '/cookies',
    callback: eventsOnBannerInteraction,
    banner: {
      cookiePolicyLinkCaption: 'Cookie Policy',
      customizeButtonCaption: 'Manage preferences',
      acceptButtonCaption: 'Accept all',
      content:
        'We use cookies to make sure Ory is the best it can be, with your consent. More information in our %{cookie_policy_link}',
      acceptButtonDisplay: true,
      customizeButtonDisplay: true,
      acceptButtonColor: '#5528ff',
      acceptButtonCaptionColor: 'white',
      customizeButtonColor: '#cbcbcb',
      customizeButtonCaptionColor: '#010101',
      closeButtonDisplay: false,
      position: 'float-bottom-center',
      textColor: '#010101',
      backgroundColor: '#ffffff'
    }
  }
  window._iub = _iub

  loadConsentBanner().then(() => {
    // Future sequential stuff that is dependent on consent banner goes here
  })
}
