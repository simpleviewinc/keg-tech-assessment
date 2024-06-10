import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

let facts; // Store the fetched facts here so we use for filteredFacts later

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
const onGetGoatFacts = async () => {
  // console.log(`Step 3. Should be called by the Get Goat Facts button!`)
  // Reset the input fields
    document.getElementById('word-input').value = ''
    document.getElementById('number-input').value =''
  
  facts = await getGoatFacts()

  // comment out this filtered since we filter loaded facts when user input only
  // const filteredFacts = filterGoatFacts(facts)
  
  addGoatFacts(facts)
}

/**
 * onFilterChange - Action to update the displayed goat facts when the filter inputs change for task #6
 */
const onFilterChange = () => {
  const filteredFacts = filterGoatFacts(facts)
  addGoatFacts(filteredFacts)
}

;(async () =>{
  /** Initially I was hard code those inputs in to html file, 
   * but given updated in future where we don't want to touch html and need more flexibility to update by js,
   * there maybe small delayed loading display when refresh the page */
  
  // Create Filter Label
  const lable = document.createElement('label');
  lable.id = 'filter-label';
  lable.textContent = 'Filter: ';

  // Create input fields
  const wordInput = document.createElement('input');
  wordInput.id = 'word-input';
  wordInput.type = 'text';
  wordInput.placeholder = 'Enter a word';

  const numberInput = document.createElement('input');
  numberInput.id = 'number-input';
  numberInput.type = 'number';
  numberInput.placeholder = 'Enter a number';

  /**
   *  Append input fields - use querySelector to grab the 1st form available 
   * but if there are more forms field, need to give them id name and grab it
  */
  const formDOM = document.querySelector('form')
  formDOM.appendChild(lable);
  formDOM.appendChild(wordInput);
  formDOM.appendChild(numberInput);

  //Add eventlistener to call onGetGoatFacts when click the button
  const getGoatFactsButton = document.getElementById('get-goat-facts');
  getGoatFactsButton.addEventListener('click',onGetGoatFacts);

  // Add event listeners to the inputs fields for Filter call 
  // either 'change' or 'input' works but I want user finished enter before calling function
  document.getElementById('word-input').addEventListener('change',onFilterChange);
  document.getElementById('number-input').addEventListener('change',onFilterChange);
})()
