const { doIt } = require('@keg-hub/jsutils')
const factList = require('./goatFacts.json');

const getRandomFact = (usedIndexes) => {
  // TODO: Test this -- it's not working SAD
  let idx;
  do {
    idx = Math.floor(Math.random() * factList.length);
  } while (usedIndexes.has(idx));
  usedIndexes.add(idx);

  return factList[idx];
}

async function goatFacts() {
  // TODO: Test this
  // Keep track of which facts are already used so duplicate facts aren't sent
  // in the same api call
  const usedIndexes = new Set();
  return doIt(20, global, () => getRandomFact(usedIndexes))
}

module.exports = {
  goatFacts,
}
