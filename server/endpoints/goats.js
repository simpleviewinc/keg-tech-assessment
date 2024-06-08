const { apiErr, apiResponse } = require('./handler')
const { goatFacts } = require('../libs/goatsLib')

const getGoats = (app, config) => async (req, res) => {
  console.log("Making it into function getGoats");
  try {
    const goats = await goatFacts()
    return apiResponse(req, res, goats, 200)
  }
  catch (err) {
    return apiErr(req, res, err, 400)
  }
}

module.exports = (app, config) => {
  // Gets a list of goat facts
  console.log("in exports in goats.js");
  app.get('/goats', getGoats(app, config))

  return app
}
