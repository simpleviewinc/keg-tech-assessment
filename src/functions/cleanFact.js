/*
  Cleans up a goat fact so the words can easliy be compared to the input
*/
export const cleanFact = fact => {
  // Remove html tags and replace multiple non-word characters with spaces
  const withoutHtmlTags = fact.replace(/<.+?>(.*?)<\/.+?>/g, '$1')

  // Remove other < and > symbols
  const withHtmlCodesDecoded = withoutHtmlTags
    .replace(/&[lg]t;/g, ' ')
    .replace(/\s\s/g, ' ')

  return withHtmlCodesDecoded
}
