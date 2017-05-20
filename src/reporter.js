export default class Reporter {
  /**
   * @param {Adapter} adapter
   * @param {Object} [options]
   * @param {Boolean} [options.enabled=true]
   */
  constructor (adapter, options = {}) {
    if (!adapter || typeof adapter.capture !== 'function') {
      throw new Error('Please provide an error reporter adapter as the first parameter')
    }

    this.adapter = adapter
    this.enabled = options.enabled !== false
  }

  /**
   * @param {Error} error
   * @param {Object} [additionalData]
   *
   * @returns {Promise}
   */
  capture (error, additionalData = {}) {
    if (!this.enabled) {
      return Promise.resolve({})
    }

    return this.adapter.capture(error, additionalData)
  }
}
