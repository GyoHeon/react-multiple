import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import "./index.css";
import { makeRoot } from "./util/makeRoot";
import { observeData } from "./util/observeData";

const countButton = document.getElementById(
  "count-button"
) as HTMLButtonElement;
const countNumber = document.getElementById("count-number") as HTMLSpanElement;

const observedNumber = observeData<number>(0);
// count는 재할당을 위해 따로 let 식별자를 사용
let [count] = observedNumber;
const [, setCount, countRender] = observedNumber;

const numberRender = makeRoot({
  root: countNumber,
  props: { count },
  Component: CountDisplay,
});

makeRoot({
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
