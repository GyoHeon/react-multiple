import ReactRender from "./Render";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import "./index.css";
import { observeData } from "./util/observeData";

const countButton = document.getElementById(
  "count-button"
) as HTMLButtonElement;
const countNumber = document.getElementById("count-number") as HTMLSpanElement;

let [count, setCount, countRender] = observeData(0);

const numberRender = ReactRender({
  root: countNumber,
  props: { count },
  Component: CountDisplay,
});

countRender(() => numberRender({ count }));

ReactRender({
  root: countButton,
  props: {
    onClick: () => {
      count = setCount(count + 1);
    },
  },
  Component: CountButton,
});
