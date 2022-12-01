const { doIt } = require('@keg-hub/jsutils')
// eslint-disable-next-line no-unused-vars
const factList = require('./goatFacts.json')

/*
  Create a randomized copy of factList, so we can ratain the original `factList` data.
  This allows us to modify the randomized dataset (i.e. grab & remove the first element ) to
  reduce the likelihood of repeats on the same page load
*/
let randomFactList = shuffleArray([...factList]);

/*
  Random sorting function.
  Loops through an array, picks a random item and swaps it with the item in the current index
*/
function shuffleArray(array) {
  array.forEach((item, index) => {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    let temp = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = temp;
  });

  return array;
}

const getRandomFact = () => {
  /*
    This function removes and returns the first randomFactList element via `shift()` below and thus,
    it will eventually reduce to zero items. Therefore, we have to create a new randomFactList array.
    Otherwise, we'd have to do some additional checking down the line to prevent null outputs
  */
  if (!randomFactList.length) {
    randomFactList = shuffleArray([...factList]);
  }

  return randomFactList.shift();
}

/*
  By default, this function will return 20 random goat facts. However, if a user conducts a search,
  the user could be shown a false negative if a match isn't found in the 20 singular random results
  that are otherwise returned by calling getRandomFact() 20x. To get around this, we want to search
  the entire result set down the line in `filterGoatFacts()`. Therefore, I've included a `getall`
  parameter to return the entire randomized set of facts in order to filter against.
*/
const goatFacts = async (getall = false) => {
  const facts = (getall) ? shuffleArray([...factList]) : doIt(20, global, () => getRandomFact());
  return facts;
}

module.exports = {
  goatFacts,
}
