import ReactRender from "./Render";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import Parent from "./components/Parent";
import "./index.css";

const parent = document.getElementById("parent") as HTMLDivElement;

let count = 0;

const parentRender = ReactRender({
  root: parent,
  props: {},
  Component: Parent,
});

setTimeout(() => {
  const countNumber = document.getElementById("count-number") as HTMLDivElement;
  ReactRender({
    root: countNumber,
    props: {
      count,
    },
    Component: CountDisplay,
  });

  const countButton = document.getElementById("count-button") as HTMLDivElement;
  ReactRender({
    root: countButton,
    props: {
      onClick: () => {
        count++;
        // numberRender({ count });
        parentRender({});
      },
    },
    Component: CountButton,
  });

  console.log(countButton.innerHTML);
}, 0);

/**
 * react root안에서 따로 만든 react root는 외부 root가 리렌더링 되어도 내부는 리렌더링되지 않습니다.
 * 이것은 기본적인 리액트의 동작과 전혀 다르므로, 엄청난 휴먼 에러를 일으킬 것으로 예상됩니다.
 */
