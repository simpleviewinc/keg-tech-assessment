const goatsApi = require('./goats')
const rootApi = require('./root')

// Register each router by priority, first matching route wins
module.exports = (app, config) => {
  goatsApi(app, config)     //Register goat path before default root which has all routes override /*
  rootApi(app, config)
}
