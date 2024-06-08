const { doIt } = require('@keg-hub/jsutils')
// eslint-disable-next-line no-unused-vars
const factList = require('./goatFacts.json')

const getRandomFact = () => {
  //this part is simple, just use Math.random() and Math.floor to generate random index for factList
  const random = Math.floor(Math.random()*factList.length)
  //console.log(random)
  return factList[random]
}

const goatFacts = async () => {
  return doIt(20, global, () => getRandomFact())
}

module.exports = {
  goatFacts,
}
