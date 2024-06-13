import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'
import { validateAndUpdate } from './validateInput'

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
const getGoatFactsBtn = document.getElementById('get-goat-facts');

const onGetGoatFacts = async () => {
  const rootContainer = document.querySelector('.card');

  const facts = await getGoatFacts()
  addGoatFacts(facts)
  rootContainer.classList.add('loaded')
  validateAndUpdate(facts)
}

getGoatFactsBtn.addEventListener('click', onGetGoatFacts);

// Removed the IIAFE in order to setup the button to call the function
