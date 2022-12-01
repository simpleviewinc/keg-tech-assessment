const {api: config} = require('../configs/server.config')

// need to define a different root URL because the API server uses a different port than the web server
const apiRootUrl = `${window.location.protocol}//${config.host}:${config.port}`

/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */
export const getGoatFacts = async (getall = false) => {
  try {
    let goatApiUrl = `${apiRootUrl}/goats`;

    // if the `getall` param is true, pass it to the api query url
    if (getall) { goatApiUrl += `?getall=true`; }

    // fetch a response from the API URL
    const apiResponse = await fetch(goatApiUrl);

    // Make sure the API response didn't return an error. If it did, throw an error message;
    if (!apiResponse.ok) {
      const message = `An error has occured: ${apiResponse.status}`;
      throw new Error(message);
    }

    // extract data as a JSON object
    const apiData = await apiResponse.json();

    // return json data property
    return apiData.data;
  } catch (e) {
    console.error(e);
  }
}