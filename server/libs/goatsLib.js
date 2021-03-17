const { doIt } = require('@keg-hub/jsutils')
// eslint-disable-next-line no-unused-vars
const factList = require('./goatFacts.json')

const getRandomFact = () => {
   return factList[Math.floor(Math.random()*factList.length)]
}

const goatFacts = async () => {
  return doIt(20, global, () => getRandomFact())
}

module.exports = {
  goatFacts,
}
