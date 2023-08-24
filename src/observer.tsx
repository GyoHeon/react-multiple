import ReactRender from "./Render";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import "./index.css";
import { observeData } from "./util/observeData";

const countButton = document.getElementById(
  "count-button"
) as HTMLButtonElement;
const countNumber = document.getElementById("count-number") as HTMLSpanElement;

const observedNumber = observeData<number>(0);
let [count] = observedNumber;
const [, setCount, countRender] = observedNumber;

const numberRender = ReactRender({
  root: countNumber,
  props: { count },
  Component: CountDisplay,
});

ReactRender({
  root: countButton,
  props: {
    onClick: () => {
      count = setCount(count + 1);
    },
  },
  Component: CountButton,
});

// 옵저버 추가
countRender(() => numberRender({ count }));
