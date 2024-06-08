/**
 * filterGoatFacts - Filters goat facts based on word and index
 */
export const filterGoatFacts = facts => {
  // console.error(`Step 6. Goat Facts filters!`)

  const filter_text = document.getElementById("filter_text");
  const filter_number = document.getElementById("filter_number");

  // If either or both text inputs are empty, all loaded goat facts should be displayed
  if ( !(filter_text.value.length && filter_number.value.length) ){
    return facts;
  }
  
  var newFacts = [[]];

  for ( let i = 0; i < facts[0].length; i++ ){
    let words_fromFilterSentence = facts[0][i].split(" ");

    if ( 
        // Reasoning for -1 is so if the user enters 3, they'd expect the 3rd word and javascript starts counting at 0
        words_fromFilterSentence.length > filter_number.value - 1 
        && 
        words_fromFilterSentence[filter_number.value - 1].toLowerCase() == filter_text.value.toLowerCase()
        // bottom code would be if the text entered partially matches the work, so "day" would still bring in "day." or "monday"
        // words_fromFilterSentence[filter_number.value - 1].toLowerCase().includes(filter_text.value.toLowerCase())
    ){
      newFacts[0].push(facts[0][i]);
    }
  }

  return newFacts
}
