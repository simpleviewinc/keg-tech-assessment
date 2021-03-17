/**
 * Add list of facts as new child LI elements of UL #goat-facts-list to the DOM
 */
export const addGoatFacts = (facts = []) => {
  const mainListDisplay = document.querySelector('#goat-facts-list')
  mainListDisplay.innerHTML = ''

  facts.forEach(fact => {
    const newLI = document.createElement('LI')
    newLI.setAttribute('class','list-item')
    newLI.append(fact)
    mainListDisplay.append(newLI)
  })
}
