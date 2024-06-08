/**
 * filterGoatFacts - Filters goat facts based on word and index
 */
export const filterGoatFacts = (facts, word, number) => {
  // console.log(`Step 6. Goat Facts filters!`)

  //If input is not matched the defined inputs => then return facts without filtered /
  if (!word || !number) {
    return facts
  }
  
  /** use JS filter function to filter out word in facts then check if it matched the word inputed and number input, the number input -1 is the index*/
  const filtered_facts = facts.filter(e => {
    const matched_word = e.split(' ')
    // check if in case number input is less than matched length, 
    // this might cause error if facts just have 1 element and number > 1
    if (number <= matched_word.length){
      //Just to compare for easier, if we want case sensitive we can remove .toLowerCast() 
      return matched_word[number - 1].toLowerCase() === word.toLowerCase()
    }
  });
  return filtered_facts;
}
