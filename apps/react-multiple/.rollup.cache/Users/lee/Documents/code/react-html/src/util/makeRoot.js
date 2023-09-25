import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
export const makeRoot = ({ root, props = {}, Component }) => {
    if (!root) {
        throw new Error(`Root with ${props}, ${Component} not found`);
    }
    if (!Component) {
        throw new Error(`Component with ${props}, ${root} not found`);
    }
    const rootElement = createRoot(root);
    const render = (newProps) => {
        const integratedProps = {
            ...props,
            ...newProps,
        };
        rootElement.render(_jsx(StrictMode, { children: _jsx(Component, { ...integratedProps }) }));
    };
    render(props);
    // rerendering 용 render 함수를 리턴합니다. props의 경우 기존 props와 새로운 props를 합쳐서 전달합니다.
    return render;
};
//# sourceMappingURL=makeRoot.js.map