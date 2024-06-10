import './styles/bootstrap.min.css'
import { DomList, getGoatFacts, GoatFacts } from './functions'

const goatFactsButton = document.querySelector('#get-goat-facts')
const textInput = document.querySelector('#text-input')
const numberInput = document.querySelector('#number-input')
const goatFactsList = document.querySelector('#goat-facts-list')

const listContainer = new DomList(goatFactsList)
const appState = new GoatFacts(listContainer)

goatFactsButton.addEventListener('click', onGetGoatFacts)
textInput.addEventListener('input', onTextChange)
numberInput.addEventListener('input', onNumberChange)

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
async function onGetGoatFacts(e) {
  e.preventDefault()
  const facts = await getGoatFacts()
  appState.goatFacts = facts
}

/**
 * onTextChange - Action to update the goat facts based on text entry
 */
function onTextChange(e) {
  // Removes any whitespace
  e.target.value = e.target.value.replace(/\s/g, '')
  appState.wordFilter = e.target.value
}

/**
 * onTextChange - Action to update the goat facts based on text entry
 */
function onNumberChange(e) {
  appState.numberFilter = Number(e.target.value)
}
