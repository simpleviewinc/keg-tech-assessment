/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
export const addGoatFacts = (facts = []) => {
  // console.log(`Step 5. Add Goat Facts to the DOM!`)
  const GoatFactList = document.getElementById('goat-facts-list');
  
  //reset-empty the list every time
  GoatFactList.innerHTML = ''

  //adding facts to the list
  facts.forEach(fact =>{
    const li = document.createElement('li')
    li.textContent = fact
    GoatFactList.appendChild(li)
  });
  return facts
}
