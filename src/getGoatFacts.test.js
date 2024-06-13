import { getGoatFacts } from './getGoatFacts'

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: ['Fact 1', 'Fact 2', 'Fact 3'] }),
  })
)

describe('getGoatFacts', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  it('should fetch goat facts from the API', async () => {
    const facts = await getGoatFacts()
    expect(facts).toEqual(['Fact 1', 'Fact 2', 'Fact 3'])
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('http://localhost:5005/goats')
  })

  it('should handle an error response', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Internal Server Error'
      })
    )

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    const facts = await getGoatFacts()
    expect(facts).toBeUndefined()
    expect(consoleSpy).toHaveBeenCalledWith(
      'There has been a problem with your fetch operation:',
      new Error('Network response was not ok Internal Server Error')
    )

    consoleSpy.mockRestore()
  })

  it('should handle a fetch exception', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')))

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    const facts = await getGoatFacts()
    expect(facts).toBeUndefined()
    expect(consoleSpy).toHaveBeenCalledWith(
      'There has been a problem with your fetch operation:',
      new Error('Fetch failed')
    )

    consoleSpy.mockRestore()
  })
})