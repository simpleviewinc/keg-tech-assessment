const { doIt } = require('@keg-hub/jsutils')
const factList = require('./goatFacts.json')

// Gets a random fact from a list from an index not in the usedIndexes Set
const getRandomFact = (usedIndexes, factList) => {
  if (usedIndexes.size >= factList.length) {
    return null
  }

  let idx
  do {
    idx = Math.floor(Math.random() * factList.length)
  } while (usedIndexes.has(idx))
  usedIndexes.add(idx)

  return factList[idx]
}

// Get a list of 20 random goat facts
function goatFacts() {
  // Keep track of which facts are already used this API call
  const usedIndexes = new Set()
  return doIt(20, this, () => getRandomFact(usedIndexes, factList))
}

module.exports = {
  goatFacts,
  getRandomFact,
}
