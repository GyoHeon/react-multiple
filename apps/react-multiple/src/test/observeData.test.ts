import { describe, expect, test } from "@jest/globals";
import { observeData } from "..";

describe("observeData", () => {
  test("initialState: 0", () => {
    const observedNumber = observeData(0);
    const [number] = observedNumber;
    // let [, setNumber, numberRenderer] = observedNumber;

    expect(number).toBe(0);
  });
});
