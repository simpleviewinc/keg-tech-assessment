/**
 * here we will validate the text and number input elements before filtering
 */

const { addGoatFacts } = require('./addGoatFacts.js')
const { filterGoatFacts } = require('./filterGoatFacts.js')
const validateText = (text, index) => {
    // Check if the text input is not empty and valid
    const isValidText = /^[^\s]+$/.test(text);
    if (!isValidText) {
        return false
    }
    // Check if the index input is not empty and is a number
    if (index === '' || isNaN(Number(index))) {
        return false
    }
    return true
}

const validateIndex = (index, text) => {
    // Check if the index input is not empty and is a number
    if (index === '' || isNaN(Number(index))) {
        return false;
    }
    // Check if the text input is not empty and valid
    const isValidText = /^[^\s]+$/.test(text);
    if (!isValidText) {
        return false
    }
    return true
}

export const validateAndUpdate = (currentFacts) => {
    const textInput = document.getElementById('text-content')
    const indexInput = document.getElementById('index')

    const filterFacts = () => {
        const textValue = textInput.value
        const indexValue = indexInput.value
        // If a valid word && valid number have been input then pass current results along w/ work+number to the filter function
        if (validateText(textValue, indexValue) && validateIndex(indexValue, textValue)) {
            let filteredFacts = filterGoatFacts(currentFacts, textValue, indexValue);
            addGoatFacts(filteredFacts)
        // If input fields have been cleared then pass the previously loaded list to addGoatFacts to update UI
        } else if (textValue === '' && indexValue === '') {
            addGoatFacts(currentFacts)
        }
    }

    textInput.addEventListener('change', filterFacts)
    indexInput.addEventListener('change', filterFacts)
}