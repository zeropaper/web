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

const loadConsent = () =>
  new Promise<void>((resolve) => {
    const existingScript = document.getElementById('iub-consent')
    if (existingScript) return resolve()

    const script = document.createElement('script')
    script.src = 'https://cdn.iubenda.com/cons/iubenda_cons.js'
    script.id = 'iub-consent'
    document.body.appendChild(script)
    script.onload = () => resolve()
  })

export const init = () => {
  const _iub = window._iub || {}
  const publicKey = 'Kwz8UykLe0l0hkBIT3qlC2i8uwjFbVzI'
  _iub.cons_instructions = _iub.cons_instructions || []
  _iub.cons_instructions.push(['init', { api_key: publicKey }])
  loadConsent().then(() => {
    console.log('consent loaded')
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
