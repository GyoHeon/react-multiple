import { useState } from "react";

const Parent = () => {
  console.log("Parent");

  return (
    <section style={{ border: "1px solid white" }}>
      This is outer root!
      <div id="count-button">This is JSX</div>
      <div id="count-number">This is JSX</div>
      <Child />
    </section>
  );
};

export default Parent;

const Child = () => {
  const [count, setCount] = useState(0);
  console.log("Child", count);

  return (
    <div>
      This is child JSX
      <button onClick={() => setCount(count + 1)}>Child Button</button>
      <div>Child's count is {count}</div>
    </div>
  );
};
