import ReactRender from "./Render";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import "./index.css";

const countButton = document.getElementById(
  "count-button"
) as HTMLButtonElement;
const countNumber = document.getElementById("count-number") as HTMLSpanElement;

let count = 0;

const numberRender = ReactRender({
  root: countNumber,
  props: {
    count,
  },
  Component: CountDisplay,
});

ReactRender({
  root: countButton,
  props: {
    onClick: () => {
      count++;
      numberRender({ count });
    },
  },
  Component: CountButton,
});
