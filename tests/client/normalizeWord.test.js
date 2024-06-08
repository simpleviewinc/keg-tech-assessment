import { normalizeWord } from "../../src/functions";

describe.skip("normalizeWord", () => {
  it("lowercases the word", () => {
    const word = normalizeWord("Chicken");
    expect(word).toBe("chicken");
  });

  it("removes non word characters from the end of the word", () => {
    const word = normalizeWord("chicken &^@");
    expect(word).toBe("chicken");
  });

  it("removes quotes and punctuation from around words", () => {
    const word = normalizeWord("'height'.");
    expect(word).toBe("height");
  });

  it("does not remove punctuation from within a word", () => {
    const word = normalizeWord("don't...");
    expect(word).toBe("don't");
  });

  it("treats hyphenated words as one word", () => {
    const word = normalizeWord("hi-fi");
    expect(word).toBe("hi-fi");
  });

  it("treats '&' as a word", () => {
    const word = normalizeWord("&");
    expect(word).toBe('&')
  });

  // tags

  // &lt;
});
