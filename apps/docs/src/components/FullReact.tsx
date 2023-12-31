import { useState } from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";
import Nav from "./Nav";

function FullReact() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      This is only react example
      <section style={{ display: "flex", flexDirection: "column" }}>
        <CountButton onClick={() => setCount(count + 1)} />
        <CountDisplay count={count} />
      </section>
    </>
  );
}

export default FullReact;
