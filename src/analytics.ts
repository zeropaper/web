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

const loadConsentManagement = () =>
  new Promise<void>((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://cdn.iubenda.com/cons/iubenda_cons.js'
    document.body.appendChild(script)
    script.onload = () => resolve()
  })

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

export const init = () => {
  const _iub = window._iub || {}
  const publicKey = 'Kwz8UykLe0l0hkBIT3qlC2i8uwjFbVzI'

  _iub.cons_instructions = _iub.cons_instructions || []
  _iub.cons_instructions.push(['init', { api_key: publicKey }])
  _iub.csConfiguration = {
    enableCcpa: true,
    countryDetection: true,
    consentOnContinuedBrowsing: false,
    ccpaAcknowledgeOnDisplay: true,
    lang: 'en',
    siteId: 2406967,
    floatingPreferencesButtonDisplay: 'bottom-right',
    cookiePolicyId: 28161797,
    privacyPolicyUrl: '/privacy',
    cookiePolicyUrl: '/cookies',
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

  loadConsentManagement().then(() => {
    return loadConsentBanner()
  })
}

export const trackEvent = (event: IEvent) => {
  if (window.plausible) {
    window.plausible(event.action)
  }
  if (window._paq) {
    window._paq.push(['trackEvent', event.category, event.action, event.origin])
  }
}
