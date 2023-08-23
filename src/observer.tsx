import ReactRender from "./Render";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import "./index.css";
import { observeData } from "./util/observeData";

const countButton = document.getElementById(
  "count-button"
) as HTMLButtonElement;
const countNumber = document.getElementById("count-number") as HTMLSpanElement;

const [count, setCount, countRender] = observeData(0);
let temp = count;

const numberRender = ReactRender({
  root: countNumber,
  props: {
    count,
  },
  Component: CountDisplay,
});
countRender(numberRender);

console.log({ countRender });

ReactRender({
  root: countButton,
  props: {
    onClick: () => {
      temp++;
      setCount(temp, "count");
    },
  },
  Component: CountButton,
});
