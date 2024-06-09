jest.mock("@keg-hub/jsutils");
import { doIt } from "@keg-hub/jsutils";
import { goatFacts } from "../../server/libs/goatsLib";

doIt.mockImplementation(() => "Test Result");

describe("goatFacts", () => {
  it("calls the doIt function", () => {
    goatFacts();
    expect(doIt).toHaveBeenCalled();
  });

  it("returns the value of the doIt function", () => {
    expect(goatFacts()).toBe("Test Result");
  });
});
