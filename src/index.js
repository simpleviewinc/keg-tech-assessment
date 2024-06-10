import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
const onGetGoatFacts = async () => {
  // console.log(`Step 3. Should be called by the Get Goat Facts button!`)

  const word = document.getElementById('word-input').value
  const number = document.getElementById('number-input').value

  // Check if the number is less than or equal to 0
  if (number && number <= 0) {
    alert('Please enter a number greater than 0')
    return
  }

  const facts = await getGoatFacts()

  //change filterGoatFacts function parameters to included word & number inputs
  const filteredFacts = filterGoatFacts(facts,word,number)

  addGoatFacts(filteredFacts)
}

;(async () =>{
  /** Initially I was hard code those inputs in to html file, 
   * but given updated in future where we don't want to touch html and need more flexibility to update by js,
   * there maybe small delayed loading display when refresh the page */
  
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
  formDOM.appendChild(wordInput);
  formDOM.appendChild(numberInput);

  //Add eventlistener to call onGetGoatFacts when click the button
  const getGoatFactsButton = document.getElementById('get-goat-facts');
  getGoatFactsButton.addEventListener('click',onGetGoatFacts);
})()
