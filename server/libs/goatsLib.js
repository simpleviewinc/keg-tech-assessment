const { doIt } = require('@keg-hub/jsutils')
// eslint-disable-next-line no-unused-vars
const factList = require('./goatFacts.json')

const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * factList.length) // grab a random fact from the imported array
  return factList[randomIndex]
}

const goatFacts = async () => {
  return doIt(20, global, () => getRandomFact())
}

module.exports = {
  goatFacts,
}
