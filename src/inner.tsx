import ReactRender from "./Render";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import Parent from "./components/Parent";
import "./index.css";

const parent = document.getElementById("parent") as HTMLDivElement;
console.log(document.getElementById("count-button")?.innerHTML);

let count = 0;

const parentRender = ReactRender({
  root: parent,
  props: {},
  Component: Parent,
});

setTimeout(() => {
  const countNumber = document.getElementById("count-number") as HTMLDivElement;
  const numberRender = ReactRender({
    root: countNumber,
    props: {
      count,
    },
    Component: CountDisplay,
  });

  const countButton = document.getElementById("count-button") as HTMLDivElement;
  const buttonRender = ReactRender({
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

console.log(document.getElementById("count-button")?.innerHTML);
