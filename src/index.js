import './styles/style.css';
import './styles/bootstrap.min.css';
import { addGoatFacts, getGoatFacts } from './functions';
import GoatFactState from './state';

const appState = new GoatFactState(addGoatFacts);

const goatFactsButton = document.querySelector('#get-goat-facts');
const textInput = document.querySelector('#text-input');
const numberInput = document.querySelector('#number-input');

goatFactsButton.addEventListener('click', onGetGoatFacts);
textInput.addEventListener('input', onTextChange);
numberInput.addEventListener('input', onNumberChange);

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
async function onGetGoatFacts(e) {
  e.preventDefault();
  const facts = await getGoatFacts();
  appState.update(GoatFactState.types.GOAT_FACTS, facts);
}

/**
 * onTextChange - Action to update the goat facts based on text entry
 */
function onTextChange(e) {
  // Removes any whitespace
  e.target.value = e.target.value.replace(/\s/g, '');
  appState.update(GoatFactState.types.WORD_FILTER, e.target.value);
}

/**
 * onTextChange - Action to update the goat facts based on text entry
 */
function onNumberChange(e) {
  appState.update(GoatFactState.types.NUMBER_FILTER, Number(e.target.value));
}

