import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const makeRoot = ({ root, props = {}, Component }) => {
  if (!root) {
    throw new Error(`Root with ${props}, ${Component} not found`);
  }
  if (!Component) {
    throw new Error(`Component with ${props}, ${root} not found`);
  }
  const rootElement = createRoot(root);
  const render = (newProps) => {
    const integratedProps = {
      ...props,
      ...newProps,
    };
    rootElement.render(
      jsx(StrictMode, { children: jsx(Component, { ...integratedProps }) })
    );
  };
  render(props);
  // rerendering 용 render 함수를 리턴합니다. props의 경우 기존 props와 새로운 props를 합쳐서 전달합니다.
  return render;
};

/**
 * @description
 * This function is used to observe data changes and re-render the component.
 * @param initialState
 * @returns [state, setState, addObserver]
 *
 * @example
 *
 * const observedNumber = observeData(0);
 * let [state] = observedNumber;
 * const [, setState, addObserver] = observedNumber;
 *
 * const render = () => {
 *  console.log(state.count);
 * };
 *
 * addObserver(render);
 *
 * // state의 최신화를 위해 setState의 리턴값을 다시 state로 사용합니다.
 * state = setState(state + 1);
 *
 * // console output: 1
 */
function updateState(newState, oldState, observers) {
  if (newState !== oldState) {
    oldState = newState;
    observers.forEach((observer) => observer(oldState));
  }
  // global 환경에서 (primitive한) state를 자동으로 업데이트 하는 방법을 찾지 못해 일단 새로운 state를 리턴합니다.
  return oldState;
}
const observeData = (initialState) => {
  const state = initialState;
  let observers = [];
  const setState = (newState) => updateState(newState, state, observers);
  function setObserver(observer, remove = false) {
    if (remove) {
      observers = observers.filter((obs) => obs !== observer);
      return;
    }
    if (observers.includes(observer)) {
      console.warn("이미 등록된 observer입니다.");
      return;
    }
    observers.push(observer);
  }
  return [state, setState, setObserver];
};

export { makeRoot as default, observeData };
