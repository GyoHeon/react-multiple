import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";
function FullReact() {
    const [count, setCount] = useState(0);
    return (_jsxs("section", { style: { display: "flex", flexDirection: "column" }, children: [_jsx(CountButton, { onClick: () => setCount(count + 1) }), _jsx(CountDisplay, { count: count })] }));
}
export default FullReact;
//# sourceMappingURL=FullReact.js.map