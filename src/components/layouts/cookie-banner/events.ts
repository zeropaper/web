import { IEvents } from '../../../analytics'

const events: IEvents = {
  optOut: {
    category: 'Consent',
    action: 'OptOutOfStatistics',
    origin: 'Statistics checkbox in cookie banner'
  },
  optIn: {
    category: 'Consent',
    action: 'OptInToStatistics',
    origin: 'Statistics checkbox in cookie banner'
  }
}

export default events
