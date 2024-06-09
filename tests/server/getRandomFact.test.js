import { getRandomFact } from "../../server/libs/goatsLib";

const list = ["This is a fact", "This is another fact"];
const testSet = new Set();

describe("getRandomFacts", () => {
  it("will return a random fact from a list", () => {
    expect(list.includes(getRandomFact(testSet, list))).toBeTruthy();
    expect(testSet.size).toBe(1);
  });

  it("will not return values alreacy in the used index set", () => {
    const prevVal = testSet.values()[0];
    expect(getRandomFact(testSet, list)).not.toEqual(prevVal);
    expect(testSet.size).toBe(2);
  });

  it("returns null if all the indexes have been used", () => {
    expect(getRandomFact(testSet, list)).toBeNull();
    expect(testSet.size).toBe(2);
  });
});
