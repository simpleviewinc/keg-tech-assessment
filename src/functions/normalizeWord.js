// Lowercases a word, and removes puntuation
export const normalizeWord = (word) => {
  if (!word || !(typeof word === 'string')) return '';
  if (word.length === 1) return word
  return word.toLowerCase().replace(/^[\W_\s]*/, '').replace(/[\W_\s]*$/, '');
}