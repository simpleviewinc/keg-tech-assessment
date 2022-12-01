import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

const getGoatsButtonEl = document.querySelector('#get-goat-facts');
const searchForm = document.querySelector('#search-form');
const wordFilter = document.querySelector('#word-filter');
const indexFilter = document.querySelector('#index-filter');

/**
  Add Event Listeners
**/

// Call onGetGoatFacts when the "Get Goat Facts" button is clicked
getGoatsButtonEl.addEventListener('click', (event) => {
  /*
    Although it's not functionally necessary, reset the form when the Get Facts button is clicked
    to create separation between the "Submit Query" form button and the "Get Random Goat Facts" button
  */
  searchForm.reset();

  // Get a new set of facts
  onGetGoatFacts();
});

// Word Filter event listener prevents spaces from being typed
wordFilter.addEventListener('keydown', (event) => {
  const key = event.keyCode;
  if (key === 32) {
    event.preventDefault();
  }
})

// Word Filter event listener removes any other whitespace characters
wordFilter.addEventListener('change', (event) => {
  let word = wordFilter.value;
  word = word.replace(/\s/g, '');
  wordFilter.value = word;
})

searchForm.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Retrieve filter values
  let wordValue = wordFilter.value;
  let indexValue = parseInt(indexFilter.value);

  // If the index filter value isn't an integer, reset it to 0
  if (!Number.isInteger(indexValue)) {
    indexValue = 0;
    indexFilter.value = 0;
  }

  // Get facts on form submission
  onGetGoatFacts(wordValue, indexValue);
})

// When the search form is reset, fetch a new set of random results
searchForm.addEventListener('reset', (event) => {
  onGetGoatFacts();
})


/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
const onGetGoatFacts = async (word = '', index = 0) => {
  /*
    Retrieve facts.
    If a user is conducting a keyword search, setting the `getall` param to true
    will signal to the api to return all goat facts in order to minimize false
    negative queries when calling `filterGoatFacts()` below. We want to run
    filterGoatFacts() against ALL facts and not just 20 randomly selected facts
  */
  const getall = (word.length && index) ? true : false;
  let facts = await getGoatFacts(getall)

  // Filter facts if a word is entered into the text input AND a number is entered into the numbered input.
  if (word.length && index){
    facts = filterGoatFacts(facts, word, index)
  }

  // Display facts
  addGoatFacts(facts)
}

;(async () => {
  await onGetGoatFacts();
})()
