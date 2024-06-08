/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
export const addGoatFacts = (facts = []) => {

  const goatFactsList = document.getElementById("goat-facts-list");

  // clearing out the unorderd list
  while (goatFactsList.firstChild) {
    goatFactsList.removeChild(goatFactsList.firstChild);
  }

  // Making the li elements when there is data
  if(Array.isArray(facts)){
    for ( let i = 0; i < facts[0].length; i++ ){
      let li_element = document.createElement("li");
      li_element.classList.add("listItem");
      li_element.innerText = facts[0][i];

      goatFactsList.appendChild(li_element);
    }
  } else {
    console.log("No Facts found");
  }

  // console.error(`Step 5. Add Goat Facts to the DOM!`)
}
