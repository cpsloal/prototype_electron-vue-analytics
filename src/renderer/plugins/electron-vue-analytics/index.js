import Analytics from 'electron-ga'

// const analytics = new Analytics('UA-XXXXXXXX-X')

export default {
  /**
   * install function
   * @param  {Vue} Vue
   * @param  {object} options  lazyload options
   */
  install (Vue, options = {}) {
    const {trackId, ...initParams} = options
    const analytics = new Analytics(trackId, initParams)

    // Send initial load event
    analytics.send('event', { ec: 'ApplicationLifecycle', ea: 'AnalyticsInitialized' })

    Vue.prototype.$analytics = analytics
  }
}
