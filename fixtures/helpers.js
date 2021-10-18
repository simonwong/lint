const logError = (...params) => console.log(...params.map(text => `\x1b[31m${text}\x1b[0m`))

const logTitle = (...params) => console.log(...params.map(text => `\x1b[36m${text}\x1b[0m`))

const logInfo = (...params) => console.log(...params)

module.exports = {
  logError,
  logTitle,
  logInfo,
}
