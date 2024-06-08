const goatsApi = require('./goats');
const rootApi = require('./root');

// Register each router by priority, first matching route wins
module.exports = (app, config) => {
  console.log(goatsApi);
  goatsApi(app, config)
  rootApi(app, config)
}
