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

  const render = (newProps?: object) => {
    const integratedProps = {
      ...props,
      ...newProps,
    };
    rootElement.render(
      <StrictMode>
        <Component {...integratedProps} />
      </StrictMode>
    );
  };

  render(props);

  // rerendering 용 render 함수를 리턴합니다. props의 경우 기존 props와 새로운 props를 합쳐서 전달합니다.
  return render;
};
