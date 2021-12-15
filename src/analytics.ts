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
    _paq: any
    _iub: any
    dataLayer: any
  }
}

export const trackEvent = (event: IEvent) => {
  if (window._paq) {
    window._paq.push(['trackEvent', event.category, event.action, event.origin])
  }
  if (window.dataLayer) {
    window.dataLayer.push({ event: event.action })
  }
}
