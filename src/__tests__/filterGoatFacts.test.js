import { isWordFoundAtIndex } from '../filterGoatFacts'
import { isFilterInvalid } from '../filterGoatFacts'


test('Check if the checkIfValid function exists',() => {
    expect(isWordFoundAtIndex).toBeDefined()
})

test('Check word at index and should be false',() => {
    expect(isWordFoundAtIndex('Wow what a test', 'test', 1)).toBe(false)
})

test('Invalid index should be caught and return false',() => {
    expect(isWordFoundAtIndex('This is a great test', 'test', 45)).toBe(false)
})

test('Check word at index and should be true',() => {
    expect(isWordFoundAtIndex('This is a great test', 'a', 3)).toBe(true)
})

test('Checking leading edge condition and case sensitivity to return true',() => {
    expect(isWordFoundAtIndex('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin et dolor at euismod', 'EUISMOD', 14)).toBe(true)
})

test('Checking trailing edge condition to return true',() => {
    expect(isWordFoundAtIndex('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin et dolor at euismod', 'Lorem', 1)).toBe(true)
})

test('Check if the isFilterInvalid function exists',() => {
    expect(isFilterInvalid).toBeDefined()
})

test('Check a valid filter',() => {
    expect(isFilterInvalid('you', 1)).toBe(false)
})

test('Check an invalid filter with empty word field',() => {
    expect(isFilterInvalid('', 1)).toBe(true)
})

test('Check an invalid filter with empty number field',() => {
    expect(isFilterInvalid('', )).toBe(true)
})

test('Check an invalid filter with space in word field',() => {
    expect(isFilterInvalid('you there', 10)).toBe(true)
})

test('Check an invalid filter with number too high',() => {
    expect(isFilterInvalid('you there', 999)).toBe(true)
})