import { ElementType } from "react";
import { createRoot } from "react-dom/client";

interface IRender {
  id: string;
  props: object;
  Component: ElementType;
}

const Render = ({ id, props, Component }: IRender) => {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with id ${id} not found`);
  }

  createRoot(element).render(<Component {...props} />);
};

export default Render;
