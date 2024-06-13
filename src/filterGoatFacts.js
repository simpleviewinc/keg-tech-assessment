/**
 * filterGoatFacts - Filters goat facts based on word and index
 */
export const filterGoatFacts = (currentFacts, textValue, indexValue) => {
  const filteredFacts = currentFacts.filter(fact => {
  const words = fact.split(' ')
  return words[indexValue] === textValue
})
return filteredFacts
}
