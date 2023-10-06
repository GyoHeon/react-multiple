# react-multiple

React-multiple is a JavaScript library for make multiple reactRoot.

The `react-multiple` package is useful when attach react library to pre-complete HTML

## Usage

For example, if you have pre-complete HTML, count up project.  
This HTML have count up button and count display.  
Unlike full react project, you have to use HTML DOM.  
In this situation, you can use react-multiple.

First, find DOM that attach react component.  
Then, attach react component by `makeRoot`.  
Finally, attach render function!

Under example show how this example works.

```html
<body>
  <div id="count-button"></div>
  <div id="count-number"></div>
  <script type="module" src="/src/observer.tsx"></script>
</body>
```

```tsx
import makeRoot, { observeData } from "react-multiple";
import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import "./index.css";

const countButton = document.getElementById(
  "count-button"
) as HTMLButtonElement;
const countNumber = document.getElementById("count-number") as HTMLSpanElement;

const observedNumber = observeData<number>(0);
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

countRender((state) => numberRender({ count: state }));
```

```ts
const observedNumber = observeData(0);
let [state] = observedNumber;
const [, setState, addObserver] = observedNumber;

const render = () => {
  console.log(state.count);
};

addObserver(render);

// state의 최신화를 위해 setState의 리턴값을 다시 state로 사용합니다.
state = setState(state + 1);

// console output: 1
```
