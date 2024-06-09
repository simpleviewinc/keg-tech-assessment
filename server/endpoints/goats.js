const { apiErr, apiResponse } = require('./handler')
const { goatFacts } = require('../libs/goatsLib')

const getGoats = (app, config) => (req, res) => {
  try {
    const goats = goatFacts()
    return apiResponse(req, res, goats, 200)
  }
  catch (err) {
    return apiErr(req, res, err, 400)
  }
}

module.exports = (app, config) => {
  // Gets a list of goat facts
  app.get('/goats', getGoats(app, config))

  return app
}
