import { cleanFact } from "../../src/functions/cleanFact";

describe("cleanFact", () => {
  it("removes html tags", () => {
    const cleaned = cleanFact(
      'Lorem <a href="www.simpleviewinc.com">Ipsum</a> dolor'
    );
    expect(cleaned).toEqual("Lorem Ipsum dolor");
  });

  it("handles encoded characters", () => {
    const cleaned = cleanFact(
      "press &lt;Shift&gt;&lt;Ctrl&gt;&lt;Alt&gt;&lt;Esc&gt;"
    );
    expect(cleaned).toEqual("press Shift Ctrl Alt Esc ");
  });

  it("returns a normal input as is", () => {
    const clean = "A goat is nearby";
    expect(cleanFact(clean)).toEqual(clean);
  });
});
