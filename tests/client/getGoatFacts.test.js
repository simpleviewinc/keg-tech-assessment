jest.mock("axios");
import axios from "axios";
import { getGoatFacts } from "../../src/functions/getGoatFacts";

const list = ["This is a fact", "This is a goat fact", "This is another fact"];

console.error = jest.fn();

describe("getGoatFacts", () => {
  it("returns an array of goat facts", async () => {
    axios.get.mockResolvedValue({ data: { data: list } });
    const res = await getGoatFacts();
    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(list.length);
  });

  it("it returns an empty array when there is an api error, and logs the error message", async () => {
    axios.get.mockRejectedValue({ message: "Error message" });
    const res = await getGoatFacts();

    expect(Array.isArray(res)).toBeTruthy();
    expect(console.error).toHaveBeenCalledWith("Error message");
  });
});
