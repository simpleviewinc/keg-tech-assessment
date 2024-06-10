import { GoatFacts } from "../../src/functions/GoatFacts";

const list = [
  "This is a fact",
  "This is a goat fact",
  "This is another fact",
  "A single letter",
];
class TestDomList {}
TestDomList.prototype.update = jest.fn();
const testFacts = new GoatFacts(new TestDomList());

describe("GoatFacts", () => {
  it("creates a GoatFacts instance with the correct values", () => {
    expect(testFacts).toBeInstanceOf(GoatFacts);
    expect(testFacts.goatFacts).toEqual([]);
    expect(testFacts.numberFilter).toEqual(0);
    expect(testFacts.wordFilter).toEqual("");
    expect(testFacts.listContainer).toBeInstanceOf(TestDomList);
  });

  it("updates the different types", () => {
    testFacts.goatFacts = list;
    expect(testFacts.goatFacts).toEqual(list);
    testFacts.wordFilter = "goat";
    expect(testFacts.wordFilter).toEqual("goat");
    testFacts.numberFilter = 4;
    expect(testFacts.numberFilter).toBe(4);
  });

  it("filters a list correctly", () => {
    expect(testFacts.filteredList()).toHaveLength(1);
    expect(testFacts.filteredList()).toContain(list[1]);
  });

  it("filters a list correctly", () => {
    testFacts.wordFilter = "a";
    testFacts.numberFilter = 1;
    expect(testFacts.filteredList()).toHaveLength(1);
    expect(testFacts.filteredList()).toContain(list[3]);
  });
});
