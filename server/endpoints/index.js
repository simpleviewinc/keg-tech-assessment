const goatsApi = require('./goats')
const rootApi = require('./root')

// Register each router by priority, first matching route wins
module.exports = (app, config) => {
  /** rootApi that matches any possible route (like a wildcard route), 
   * it will handle all requests that reach it first, leaving no requests for goatsApi.
   * Just swap the order to get it fixed.
   * */ 
  goatsApi(app, config)
  rootApi(app, config)
}
