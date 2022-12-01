/**
 * filterGoatFacts - Filters goat facts based on word and index
 */
export const filterGoatFacts = (facts, word = '', index = 0) => {
  /*
    Items will be returned if the selected index value is LTE the length of the array (i.e. the word
    index filter isn't greater than the actual number of words in the string) AND the current array value at that index
    (i.e. the word at the chosen position) equals the word filter value
  */
  return facts.filter(fact => {
    const wordArray = fact.split(' ');
    return (
      (index <= wordArray.length) && // The chosen index filter value must be LTE the number of words in the fact string
      wordArray[index - 1].toLowerCase() === word.toLowerCase() // The word at the chosen index equals the word filter value
    )
  })
}
