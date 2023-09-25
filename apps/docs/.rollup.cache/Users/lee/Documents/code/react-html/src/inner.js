import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";
import Parent from "./components/Parent";
import "./index.css";
import { makeRoot } from "./util/makeRoot";
const parent = document.getElementById("parent");
let count = 0;
const parentRender = makeRoot({
    root: parent,
    props: {},
    Component: Parent,
});
setTimeout(() => {
    const countNumber = document.getElementById("count-number");
    makeRoot({
        root: countNumber,
        props: {
            count,
        },
        Component: CountDisplay,
    });
    const countButton = document.getElementById("count-button");
    makeRoot({
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
 * react는 렌더링을 비동기적으로 실행합니다.
 * 이 때 micro task queue를 이용하므로 후순위인 task queue를 사용하는 setTimeout을 이용하면
 * react root 안에 nested react root를 만들수는 있습니다.
 *
 * 하지만!
 *
 * react root안에서 따로 만든 react root는 외부 root가 리렌더링 되어도 내부는 리렌더링되지 않습니다.
 * 이것은 기본적인 리액트의 동작과 전혀 다르므로, 엄청난 휴먼 에러를 일으킬 것으로 예상됩니다.
 */
//# sourceMappingURL=inner.js.map