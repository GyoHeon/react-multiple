import { ElementType, StrictMode } from "react";
import { createRoot } from "react-dom/client";

interface IRender {
  root: Element;
  props?: object;
  Component: ElementType;
}

export const makeRoot = ({ root, props = {}, Component }: IRender) => {
  if (!root) {
    throw new Error(`Root with ${props}, ${Component} not found`);
  }
  if (!Component) {
    throw new Error(`Component with ${props}, ${root} not found`);
  }

  const rootElement = createRoot(root);

  let integratedProps = { ...props };

  const render = (newProps?: object) => {
    integratedProps = {
      ...integratedProps,
      ...newProps,
    };
    rootElement.render(
      <StrictMode>
        <Component {...integratedProps} />
      </StrictMode>
    );
  };

  render(props);

  return render;
};
