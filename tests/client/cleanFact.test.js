import { cleanFact } from "../../src/functions";

describe("cleanFact", () => {
  it("removes html tags", () => {
    const wordArr = cleanFact("Lorem <a href=\"www.simpleviewinc.com\">Ipsum</a> dolor");
    expect(wordArr).toEqual("Lorem Ipsum dolor");
  });

  it("handles encoded characters", () => {
    const wordArr = cleanFact("press &lt;Shift&gt;&lt;Ctrl&gt;&lt;Alt&gt;&lt;Esc&gt;");
    expect(wordArr).toEqual("press Shift Ctrl Alt Esc ");
  });
});
