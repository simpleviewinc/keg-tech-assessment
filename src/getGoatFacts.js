import axios from 'axios';

/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */
export const getGoatFacts = async () => {

  let resReturn = [];

  await axios.get("http://localhost:5005/goats")
  .then(function (res) { 
    resReturn = res.data.data;
  })
  .catch(function (error) {
    console.log("Unable to access goats API")
    console.log(error);
  })
  
  return resReturn;
  // console.error(`Step 4. Goat Facts api call!`)
}
