/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */
const { addGoatFacts } = require('./addGoatFacts') // import the addGoatFacts function to update the DOM if facts are present in our response
export const getGoatFacts = async () => {
  try {
    const response = await fetch('http://localhost:5005/goats');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    if (data.data.length > 0) return data.data
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}
