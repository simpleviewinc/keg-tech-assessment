const { filterGoatFacts } =  require('./filterGoatFacts')

describe('filterGoatFacts', () => {
  const currentFacts = [
    'Goats have rectangular pupils',
    'Goats have a four-chamber stomach',
    'Goats were one of the first animals to be domesticated',
    'There are over 300 distinct breeds of goats'
  ]

  it('should filter facts based on the word and index', () => {
    const filteredFacts = filterGoatFacts(currentFacts, 'Goats', 0)
    expect(filteredFacts.length).toBe(3)
    expect(filteredFacts).toContain('Goats have rectangular pupils')
    expect(filteredFacts).toContain('Goats have a four-chamber stomach')
    expect(filteredFacts).toContain('Goats were one of the first animals to be domesticated')
  })

  it('should return an empty array if no facts match', () => {
    const filteredFacts = filterGoatFacts(currentFacts, 'nonexistent', 0)
    expect(filteredFacts.length).toBe(0)
  })

  it('should handle indices that are out of bounds', () => {
    const filteredFacts = filterGoatFacts(currentFacts, 'Goats', 10)
    expect(filteredFacts.length).toBe(0)
  })
})
