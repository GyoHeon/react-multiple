import makeRoot, { observeData } from "react-multiple";
import ComponentObj from "./components/ComponentObj";
import "./index.css";

const observedNumber = observeData<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const allReactRoot = document.querySelectorAll("*[data-react]");

const componentsRenderers = [...allReactRoot].map((root) => {
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
      return;
    }
    return;
  })();

  return makeRoot({
    root,
    Component,
    props: { children, ...props },
  });
});

const [buttonRender, displayRender] = componentsRenderers;

type CounterState = {
  count: number;
  increment: () => void;
};

displayRender({ count: 0 });
buttonRender({ onClick: () => console.log("sibal") });
