type TRender = <T>(state: T) => void;

type TObserveData = <T>(
  initialState: T
) => [T, (newState: T) => T, (observer: TRender) => void];

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

export const observeData: TObserveData = <T>(initialState: T) => {
  let state = initialState;
  const observers: TRender[] = [];

  function setState(newState: T) {
    if (newState !== state) {
      state = newState;
      observers.forEach((observer) => observer(state));
    }

    // global 환경에서 (primitive한) state를 자동으로 업데이트 하는 방법을 찾지 못해 일단 새로운 state를 리턴합니다.
    return state;
  }

  function addObserver(observer: TRender) {
    observers.push(observer);
  }

  return [state, setState, addObserver];
};
