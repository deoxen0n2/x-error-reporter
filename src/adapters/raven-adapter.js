import Bluebird from 'bluebird'

export default class RavenAdapter {
  constructor (raven) {
    if (!raven || typeof raven.captureException !== 'function') {
      throw new Error('Please provide a raven instance as the first parameter')
    }

    this.raven = raven
    this.captureException = Bluebird.promisify(raven.captureException, { context: this.raven })
  }

  /**
   * @param {Error} error
   * @param {Object} [additionalData]
   *
   * @returns {Promise}
   */
  capture (error, additionalData = {}) {
    return this.captureException(error, additionalData)
      .then(eventId => ({ id: eventId }))
  }
}
