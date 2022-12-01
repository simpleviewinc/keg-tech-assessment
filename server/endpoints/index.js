const goatsApi = require('./goats')
const rootApi = require('./root')

// Register each router by priority, first matching route wins
module.exports = (app, config) => {
  goatsApi(app, config)
  rootApi(app, config) // per root.js, catch-all route should come last after others
}
