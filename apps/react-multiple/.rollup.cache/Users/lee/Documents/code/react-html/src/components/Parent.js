import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Parent = () => {
    console.log("Parent");
    return (_jsxs("section", { style: { border: "1px solid white" }, children: ["This is outer root!", _jsx("div", { id: "count-button", children: "This is JSX" }), _jsx("div", { id: "count-number", children: "This is JSX" }), _jsx(Child, {})] }));
};
export default Parent;
const Child = () => {
    const [count, setCount] = useState(0);
    console.log("Child", count);
    return (_jsxs("div", { children: ["This is child JSX", _jsx("button", { onClick: () => setCount(count + 1), children: "Child Button" }), _jsxs("div", { children: ["Child's count is ", count] })] }));
};
//# sourceMappingURL=Parent.js.map