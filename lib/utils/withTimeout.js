const withTimeout = (time, f) => (...args) =>
  Promise.race([new Promise((_, reject) => setTimeout(reject, time, 'TIMEOUT')), f(...args)])

module.exports = withTimeout
