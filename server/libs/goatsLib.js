const { doIt } = require('@keg-hub/jsutils')
// eslint-disable-next-line no-unused-vars
const factList = require('./goatFacts.json')

const getRandomFact = () => {
  return factList;
  // throw new Error(`Random goat fact code not implemented!`)
}

const goatFacts = async () => {
  return doIt(1, global, () => getRandomFact())
}

module.exports = {
  goatFacts,
}
