import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <button onClick={() => setCount((count) => count + 1)}>count up</button>
      count is {count}
    </section>
  );
}

export default App;
