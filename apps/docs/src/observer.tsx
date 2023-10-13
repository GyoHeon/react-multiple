import makeRoot, { observeData } from "react-multiple";
import ComponentObj from "./components/ComponentObj";
import "./index.css";

type CounterState = {
  count: number;
  increment: () => void;
};

const observedNumber = observeData<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const reactButtonRoot = document.querySelector(
  "div[data-react=CountButton]"
) as HTMLDivElement;
const reactDisplayRoot = document.querySelector(
  "*[data-react=CountDisplay]"
) as HTMLDivElement;

// Render button only once
makeRoot({
  root: reactButtonRoot,
  Component: ComponentObj.CountButton,
  props: {
    onClick: () => {
      observedNumber.getState().increment();
    },
  },
});

const displayRender = makeRoot({
  root: reactDisplayRoot,
  Component: ComponentObj.CountDisplay,
  props: { count: observedNumber.getState().count },
});

observedNumber.setObserver(() => {
  displayRender({ count: observedNumber.getState().count });
});
