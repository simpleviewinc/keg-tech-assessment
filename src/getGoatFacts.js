import axios from "axios"

/**
 * Hit the api endpoint and return an array of 20 goat facts
 */
export const getGoatFacts = async () => {
    try {
        const res = await axios.get('http://localhost:5005/goats')
        const facts = res.data.data  //Extract facts array from data that also contains status code
        return facts
    } catch (error) {
        console.log(`Error retrieving data from API : ${error}`);
    }
}
