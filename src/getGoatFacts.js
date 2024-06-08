/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */
export const getGoatFacts = async () => {
  const res = await fetch('http://localhost:5005/goats');

  if(res.ok){
    const facts = await res.json()
    //console.log(facts.data)
    return facts.data
  }else{
    console.error('Error:',res.status,res.statusText)
    return[]
  }
}
