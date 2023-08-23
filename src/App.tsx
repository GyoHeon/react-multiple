import { useState } from "react";
import "./App.css";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <CountButton onClick={() => setCount(count + 1)} />
      <CountDisplay count={count} />
    </section>
  );
}

export default App;
