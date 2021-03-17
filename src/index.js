import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

/**
 * On 'Get Goat Facts' button click, run expected sequence of events to retrieve facts and display
 */
const getGoatFactsButton = document.querySelector('#get-goat-facts')
const wordFilterInputField = document.querySelector('#wordFilter')
const indexFilterInputField = document.querySelector('#indexFilter')

getGoatFactsButton.addEventListener('click', async() => {
    try {
        const facts = await getGoatFacts()
        addGoatFacts(facts)
        filterGoatFacts()

    } catch (error) {
        alert(`Failed!! Try again. We received error : ${error}`)
    }
});

/**
 * If filter field loses focus reevaluate the list items to be displayed
*/
wordFilterInputField.addEventListener('blur', () => {
    filterGoatFacts()
}, true);

/**
 * If filter field loses focus reevaluate the list items to be displayed
*/
indexFilterInputField.addEventListener('blur', () => {
    filterGoatFacts()
}, true);