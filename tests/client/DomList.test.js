import { DomList } from "../../src/functions/DomList";

const list = ["This is a fact", "This is a goat fact", "This is another fact"];

const list2 = ["This is a shorter list"];

describe("DomList", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <ul id="test-ul"></ul>
      </div>
    `;
  });

  it("creates a new DomList instance with a ul root property", () => {
    const testList = new DomList(document.querySelector("#test-ul"));
    expect(testList.ul).toBe(document.querySelector("#test-ul"));
  });

  it("has a update method that adds list elements to the DOM with a class of list-group-item", () => {
    const testList = new DomList(document.querySelector("#test-ul"));
    testList.update(list);
    expect(document.querySelector("#test-ul").childElementCount).toBe(3);
    expect(document.querySelector("#test-ul li").classList).toContain(
      "list-group-item"
    );
  });

  it("removes an old list and adds a new list when the update method is called", () => {
    const testList = new DomList(document.querySelector("#test-ul"));
    testList.update(list);
    expect(document.querySelector("#test-ul").childElementCount).toBe(3);
    testList.update(list2);
    expect(document.querySelector("#test-ul").childElementCount).toBe(1);
  });
});
