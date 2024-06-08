/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
const goatFactsList = document.querySelector('#goat-facts-list');

export const addGoatFacts = (goatFacts) => {
  emptyList(goatFactsList);
  goatFactsList.insertAdjacentHTML(
    'afterbegin',
    goatFacts
      .map((fact) => `<li class="list-group-item">${fact}</li>`)
      .join('\n')
  );
};

// TODO: Make utils file with this
function emptyList(parent) {
  for (const child of parent.childNodes) {
    parent.removeChild(child);
  }
}
