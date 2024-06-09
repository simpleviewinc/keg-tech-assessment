import { normalizeWord } from './normalizeWord'
import { cleanFact } from './cleanFact'

class GoatFacts {
  #goatFacts
  #wordFilter
  #numberFilter

  constructor(listContainer) {
    this.#goatFacts = []
    this.#wordFilter = ''
    this.#numberFilter = 0
    this.listContainer = listContainer
  }

  // Using getters and setters to ensure the app state is updated when one value changes
  get goatFacts() {
    return this.#goatFacts
  }

  get wordFilter() {
    return this.#wordFilter
  }

  get numberFilter() {
    return this.#numberFilter
  }

  set goatFacts(val) {
    this.#goatFacts = val
    this.update()
  }

  set wordFilter(val) {
    this.#wordFilter = val
    this.update()
  }

  set numberFilter(val) {
    this.#numberFilter = val
    this.update()
  }

  // Types of update options
  static types = {
    GOAT_FACTS: 'GOAT_FACTS',
    WORD_FILTER: 'WORD_FILTER',
    NUMBER_FILTER: 'NUMBER_FILTER',
  }

  // Returns a filtered list based on the word and number filter inputs
  filteredList() {
    if (!(this.wordFilter && this.numberFilter)) {
      return this.goatFacts
    }

    const wordFilter = this.wordFilter
    const numberFilter = this.numberFilter - 1
    return this.goatFacts.filter(fact => {
      const cleaned = cleanFact(fact)
      const factArr = cleaned.split(/\s/)
      return (
        factArr[numberFilter] &&
        normalizeWord(factArr[numberFilter]) ===
          normalizeWord(wordFilter.toLowerCase())
      )
    })
  }

  // Used to update state after a value is updated
  update() {
    // Update the list in the DOM with the filtered list based on the new settings
    this.listContainer.update(this.filteredList())
  }
}

export { GoatFacts }
