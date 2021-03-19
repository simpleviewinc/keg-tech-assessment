import mocked from 'axios'
import { getGoatFacts } from '../getGoatFacts'



test('Check if the getGoatFacts function exists',() => {
    expect(getGoatFacts).toBeDefined()
})

//Note : API endpoint needs to be running for this test to work
// test('Check if async data call to retrieve data is correct', async () => {
//     expect.assertions(1)
//     const data = await getGoatFacts()
//     expect(data.length).toBe(20)
// })


test('Check if async data call to retrieve data is retrieves data in correct format', async () => {
    mocked.get.mockImplementationOnce(() => 
        Promise.resolve({
            data : {
                data: ['Hello there','How are you', 'mmm hmmm'],
                StatusCode: 200
            }
        })
    )
    const data = await getGoatFacts()
    expect(mocked.get).toHaveBeenCalledTimes(1)
    expect(data).toEqual(['Hello there','How are you', 'mmm hmmm'])
})

