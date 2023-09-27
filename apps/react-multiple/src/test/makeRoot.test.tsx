import { describe, expect, test } from "@jest/globals";
import makeRoot from "..";

describe("observeData", () => {
  test("Init makeRoot", () => {
    const root = document.createElement("div");
    const Component = () => <div>test</div>;
    const render = makeRoot({ root, Component });

    expect(render).toBeInstanceOf(Function);
  });
});
