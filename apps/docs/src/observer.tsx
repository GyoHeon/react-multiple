import makeRoot, { observeData } from "react-multiple";
import ComponentObj from "./components/ComponentObj";
import "./index.css";

const allReactRoot = document.querySelectorAll("*[data-react]");

const Components = [...allReactRoot].map((root) => {
  const componentName = root.getAttribute(
    "data-react"
  ) as keyof typeof ComponentObj;

  const Component = ComponentObj[componentName] || <div>fail!</div>;
  const props = JSON.parse(root.getAttribute("data-react-props") || "{}") || {};

  const children = (() => {
    if (root.innerHTML) {
      if (root.childElementCount === 0) {
        return root.innerHTML;
      }
      props["html"] = root.innerHTML;
      return null;
    }
    return null;
  })();

  return makeRoot({
    root,
    Component,
    props: { children, ...props },
  });
});

const [ButtonRender, DisplayRender] = Components;

type CounterState = {
  count: number;
  inc: () => void;
};

const observedNumber = observeData<CounterState>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

DisplayRender({ count: observedNumber.getState().count });
ButtonRender({ onClick: observedNumber.getState().inc() });
