import { getGoatFacts } from '../getGoatFacts'


test('Check if the getGoatFacts function exists',() => {
    expect(getGoatFacts).toBeDefined()
})

//Note : API endpoint needs to be running for this test to work
test('Check if async data call to retrieve data is correct', async () => {
    expect.assertions(1)
    const data = await getGoatFacts()
    expect(data.length).toBe(20)
})