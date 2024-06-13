/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
export const addGoatFacts = (facts = []) => {
  if (facts.length === 0) {
    console.error(`The fact is there are no facts!`)
    return
  }
  const list = document.getElementById('goat-facts-list')
  // Remove any child nodes
  list.innerHTML = ''
  // Create new element and append to the parent container
  facts.forEach(fact => {
    let listItem = document.createElement('li')
    listItem.textContent = fact
    list.appendChild(listItem)
  })
}
