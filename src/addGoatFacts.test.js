const { addGoatFacts } = require('./addGoatFacts')

describe('addGoatFacts', () => {
  let list

  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = '<ul id="goat-facts-list"></ul>'
    list = document.getElementById('goat-facts-list')
  })

  it('should add goat facts to the DOM', () => {
    const facts = ['Goats have rectangular pupils.', 'Goats have a four-chamber stomach.']
    addGoatFacts(facts)
    expect(list.children.length).toBe(2)
    expect(list.children[0].textContent).toBe('Goats have rectangular pupils.')
    expect(list.children[1].textContent).toBe('Goats have a four-chamber stomach.')
  });

  it('should handle an empty array', () => {
    console.error = jest.fn()
    addGoatFacts([])
    expect(list.children.length).toBe(0)
    expect(console.error).toHaveBeenCalledWith('The fact is there are no facts!')
  })

  it('should clear previous facts before adding new ones', () => {
    const initialFacts = ['Initial fact']
    addGoatFacts(initialFacts)
    expect(list.children.length).toBe(1)

    const newFacts = ['New fact 1', 'New fact 2']
    addGoatFacts(newFacts)
    expect(list.children.length).toBe(2)
    expect(list.children[0].textContent).toBe('New fact 1')
    expect(list.children[1].textContent).toBe('New fact 2')
  });
});
