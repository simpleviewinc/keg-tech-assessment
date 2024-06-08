import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
const onGetGoatFacts = async () => {
  // console.error(`Step 3. Should be called by the Get Goat Facts button!`)

  const facts = await getGoatFacts()

  const filteredFacts = filterGoatFacts(facts)

  addGoatFacts(filteredFacts)
  
}


function makeCall(){
  ;(async () => {
    // console.error(`Step 2. Open the browser inspector!`)
    await onGetGoatFacts()
  })()
}


window.addEventListener("load", (event) => {

  // if they want the call to be made when the site loads uncomment the bottom part
  // makeCall();

  const getGoatFacts = document.getElementById("get-goat-facts");
  const filter_text = document.getElementById("filter_text");
  const filter_number = document.getElementById("filter_number");
  const clearFilters = document.getElementById("clearFilters");

  // Remove all non-numeric characters for the number filter
  filter_number.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, '');
  });

  // making the goat API call when the get-goat-facts button is clicked or a filter is changed
  getGoatFacts.addEventListener("click", makeCall); // "Get Goat Facts!" button
  filter_text.addEventListener("change", makeCall); // when the text filter is changed
  filter_number.addEventListener("change", makeCall); // when the number filter is changed

  // when the clear filters buttong is click clear the filter to return all facts
  clearFilters.addEventListener("click", () => {
    filter_text.value = "";
    filter_number.value = "";
    makeCall();
  });

});