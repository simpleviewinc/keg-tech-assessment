const { apiErr, apiResponse } = require('./handler')
const { goatFacts } = require('../libs/goatsLib')

const getGoats = (app, config) => async (req, res) => {
  try {
    const getall = req?.query?.getall || false;
    const goats = await goatFacts(getall)
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
