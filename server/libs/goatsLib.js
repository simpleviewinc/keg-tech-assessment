const { doIt } = require('@keg-hub/jsutils')
// eslint-disable-next-line no-unused-vars
const factList = require('./goatFacts.json')
/**give some thoughts on what if randomFacts has duplicate, need to 
 * able to generated 20 distinct random facts
 */
const getRandomFact = (check_index) => {

  let random;
  do {
    random = Math.floor(Math.random() * factList.length);
  } while (check_index.has(random)); 
  
  check_index.add(random); // add the used index to the Set
  
  return factList[random];

}

const goatFacts = async () => {

  /** 
   I might change something here if required to get 20x random facts based on filtered input...
   but assume this case allow facts re-generated but not repeat on the list
   * */ 
  let check_index = new Set(); //check_index set use to store randome generated index
  return doIt(20, global, () => getRandomFact(check_index))
}

module.exports = {
  goatFacts,
}
