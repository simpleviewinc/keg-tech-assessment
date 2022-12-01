/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
export const addGoatFacts = (facts = []) => {
  const listEl = document.querySelector('ul#goat-facts-list');
  let listItems = ``;

  // Clear list
  listEl.innerHTML = '';

  // If there aren't any facts, display a 'no results found' message. Otherwise, output the list of facts.
  if (!facts.length) {
    listItems = `<div class="alert alert-primary text-center" role="alert">No Results Found. Please Try Again.</div>`
  } else {
    // Loop through the facts and map each of them to <li> elements
    listItems = `
      ${facts.map(fact => `<li class="list-group-item">${fact}</li>`).join('')}
    `;
  }

  // Add fact list items to the DOM
  listEl.innerHTML = listItems;
}
