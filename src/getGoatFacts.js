/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */

//update calling apiURL from server.config instead of hardcode fetch('localhost:5005/goats')
const { api: config } = require('../configs/server.config')
const apiURl = `http://${config.host}:${config.port}`

export const getGoatFacts = async () => {
  const res = await fetch(`${apiURl}/goats`);

  if(res.ok){
    const facts = await res.json()
    //console.log(facts.data)
    return facts.data
  }else{
    console.error('Error:',res.status,res.statusText)
    return[]
  }
}
