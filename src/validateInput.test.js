import { validateAndUpdate } from './validateInput'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

jest.mock('./addGoatFacts')
jest.mock('./filterGoatFacts')

describe('validateAndUpdate', () => {
  const currentFacts = [
    'Goats have rectangular pupils',
    'Goats have a four-chamber stomach',
    'Goats were one of the first animals to be domesticated',
    'There are over 300 distinct breeds of goats'
  ]

  let textInput, indexInput

  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="text-content" />
      <input type="number" id="index" />
      <ul id="goat-facts-list"></ul>
    `
    textInput = document.getElementById('text-content')
    indexInput = document.getElementById('index')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call addGoatFacts with filtered facts when inputs are valid', () => {
    textInput.value = 'Goats'
    indexInput.value = '0'
    filterGoatFacts.mockReturnValue(['Goats have rectangular pupils'])

    validateAndUpdate(currentFacts)

    textInput.dispatchEvent(new Event('change'))
    indexInput.dispatchEvent(new Event('change'))

    expect(filterGoatFacts).toHaveBeenCalledWith(currentFacts, 'Goats', '0')
    expect(addGoatFacts).toHaveBeenCalledWith(['Goats have rectangular pupils'])
  })

  it('should call addGoatFacts with currentFacts when inputs are empty', () => {
    textInput.value = ''
    indexInput.value = ''

    validateAndUpdate(currentFacts)

    textInput.dispatchEvent(new Event('change'))
    indexInput.dispatchEvent(new Event('change'))

    expect(addGoatFacts).toHaveBeenCalledWith(currentFacts)
  })

  it('should not call addGoatFacts when inputs are invalid', () => {
    textInput.value = 'Invalid1'
    indexInput.value = 'NotANumber'

    validateAndUpdate(currentFacts)

    textInput.dispatchEvent(new Event('change'))
    indexInput.dispatchEvent(new Event('change'))

    expect(addGoatFacts).not.toHaveBeenCalled()
  })
})