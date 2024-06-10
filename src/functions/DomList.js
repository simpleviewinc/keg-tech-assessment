/*
  Handles the state of the list in the DOM
*/
class DomList {
  // Takes a dom element that contains the list
  constructor(ul) {
    this.ul = ul
  }

  // Removes all children from the list
  emptyList() {
    for (const child of this.ul.childNodes) {
      this.ul.removeChild(child)
    }
  }

  // Morphs the facts array into a list string to add to the ul container
  formatFactsIntoList(facts) {
    return facts
      .map(
        (fact, i) =>
          `<li class="list-group-item border-0 ${
            !(i % 2) ? ' list-group-item-secondary' : ''
          }${!i ? ' mt-3' : ''}">${fact}</li>`
      )
      .join('\n')
  }

  // Takes an array of goat facts and updates the dom
  update(goatFacts) {
    this.emptyList()
    this.ul.insertAdjacentHTML(
      'afterbegin',
      this.formatFactsIntoList(goatFacts)
    )
  }
}

export { DomList }
