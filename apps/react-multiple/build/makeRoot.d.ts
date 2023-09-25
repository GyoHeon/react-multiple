import { ElementType } from "react";
interface IRender {
    root: Element;
    props?: object;
    Component: ElementType;
}
export declare const makeRoot: ({ root, props, Component }: IRender) => (newProps?: object) => void;
export {};
//# sourceMappingURL=makeRoot.d.ts.map