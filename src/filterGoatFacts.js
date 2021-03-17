/**
 * If filter is invalid for any reason, redisplay all list elements and if not display the ones that meet criteria
 */
export const filterGoatFacts = () => {
  let items = document.getElementsByClassName('list-item');
  const wordFilter = document.querySelector('#wordFilter').value.trim();
  const indexFilter = document.querySelector('#indexFilter').value.trim();  
 
  if (isFilterInvalid(wordFilter,indexFilter)) {
    items.forEach(element => element.style.display = '' )
  } else {
    items.forEach(element => {
        if(!isWordFoundAtIndex(element.innerHTML,wordFilter,indexFilter)) {
            element.style.display = 'none'
        }
        else {
            element.style.display = ''
        }
    });
  }
}

/**
 * Question : Probably also check if word starts with or ends with ' OR ends with . and remove/clean-up those characters. Need to check with Lance
 * For a sentence check if word is present at a certain index and return a boolean value
 * e.g. 'Wow such empty' with wordToFind = such and expectedIndex=2 is true
 * e.g. 'Wow such empty' with wordToFind = such and expectedIndex=3 is false
 */
export const isWordFoundAtIndex = (sentence, wordToFind, expectedIndex) =>{

    let wordsAsArray = sentence.split(' ')
    
    //Early return
    if(wordsAsArray.length<expectedIndex) return false;

    try {        
        return (wordsAsArray[expectedIndex-1].toUpperCase() === wordToFind.toUpperCase())  
    } catch (error) {
        console.log(`Error looking for a word in a sentence ${error}`);
        return false;
    }     
}

/**
 * Question : Should the maximum number be allowed in the index field be parsed from the length of the maximum possible fact, rather than a default 99?
 * Check if filters meet expected criteria of one word with a positive index
 */
export const isFilterInvalid = (wordFilter, indexFilter) =>{
    const wordFilterErrorRegex = new RegExp('\\s');

    return !wordFilter || !indexFilter || wordFilterErrorRegex.test(wordFilter) || (indexFilter < 1 || indexFilter > 99)
}

