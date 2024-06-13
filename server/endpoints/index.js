const goatsApi = require('./goats')
const rootApi = require('./root')

// Register each router by priority, first matching route wins
module.exports = (app, config) => {
  // Must register specific routes first
  goatsApi(app, config)
  // Catch all route should be registered last otherwise our fetch call will always return the uuid and value of inDocker
  rootApi(app, config)
}
