import { expect, it } from "vitest";
import { observeData } from "../src/observeData";

type CounterState = {
  count: number;
  increment: () => void;
};

it("Counter store", () => {
  const store = observeData<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  }));

  expect(store.getState().count).toEqual(0);

  store.getState().increment();

  expect(store.getState().count).toEqual(1);
});
