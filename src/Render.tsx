import { ElementType } from "react";
import { createRoot } from "react-dom/client";

interface IRender {
  root: Element;
  props: object;
  Component: ElementType;
}

// ToDo: Can replace root?
const ReactRender = ({ root, props, Component }: IRender) => {
  if (!root) {
    throw new Error(`Root with ${props}, ${Component} not found`);
  }
  if (!Component) {
    throw new Error(`Component with ${props}, ${root} not found`);
  }

  const rootElement = createRoot(root);

  const render = (props: object) => {
    rootElement.render(<Component {...props} />);
  };

  render(props);

  return render;
};

export default ReactRender;
