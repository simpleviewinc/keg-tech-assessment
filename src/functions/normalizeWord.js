/*
  Lowercases a word, and removes puntuation and other non word characters
*/
export const normalizeWord = word => {
  if (!word || !(typeof word === 'string')) return ''
  const lowercaseWord = word.toLowerCase()
  if (lowercaseWord.length === 1) return lowercaseWord
  return lowercaseWord.replace(/^[\W_\s]*/, '').replace(/[\W_\s]*$/, '')
}
