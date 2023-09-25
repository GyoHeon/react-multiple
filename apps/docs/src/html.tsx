import makeRoot from "react-multiple";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import "./index.css";

const countButton = document.getElementById(
  "count-button"
) as HTMLButtonElement;
const countNumber = document.getElementById("count-number") as HTMLSpanElement;

let count = 0;

const numberRender = makeRoot({
  root: countNumber,
  props: {
    count,
  },
  Component: CountDisplay,
});

makeRoot({
  root: countButton,
  props: {
    onClick: () => {
      count++;
      numberRender({ count });
    },
  },
  Component: CountButton,
});

/**
 * 가장 간단한 형태의 예제입니다. count 같은 props가 바뀔 경우 해당 props에 영향을 받는 모든 render 함수를 실행해야합니다.
 * 이런 작업은 모두 수동으로 해야해서 휴먼 에러가 일어날 가능성이 높습니다.
 */
