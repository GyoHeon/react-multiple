import { JSDOM } from "jsdom";
import React from "react";
import { describe, expect, it, test } from "vitest";
import { makeRoot } from "../src/makeRoot";

type CounterState = {
  count: number;
  increment: () => void;
};

const HTML = `<!doctype html>
<html>
  <body>
    <div data-react="CountButton">This is original button DOM</div>
    <div data-react="CountDisplay">This is original display DOM</div>
  </body>
</html>`;

const CounterButton = () => <button>React counter button</button>;
const CounterDisplay = ({ count = 0 }) => <div>React counter : {count}</div>;

test("HTML work", () => {
  const { window } = new JSDOM(HTML);

  const button = window.document.querySelector("[data-react=CountButton]");
  expect(button?.innerHTML).toBe("This is original button DOM");

  const display = window.document.querySelector("[data-react=CountDisplay]");
  expect(display?.innerHTML).toBe("This is original display DOM");
});

describe("Counter test", () => {
  it("MakeRoot work", () => {
    const { window } = new JSDOM(HTML);

    const buttonRoot = window.document.querySelector(
      "[data-react=CountButton]"
    ) as Element;
    const displayRoot = window.document.querySelector(
      "[data-react=CountDisplay]"
    ) as Element;

    makeRoot({ root: buttonRoot, Component: CounterButton });
    makeRoot({ root: displayRoot, Component: CounterDisplay });

    const asyncTest = async () => {
      setTimeout(() => {
        expect(buttonRoot.innerHTML).toBe(
          "<button>React counter button</button>"
        );
        expect(displayRoot.innerHTML).toBe("<div>React counter : 0</div>");
      }, 0);
    };

    asyncTest();
  });
  it("Counter work", () => {});
});
