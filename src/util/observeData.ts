// type TRender = (props: object) => void;

type TObserveData = <T>(
  initialState: T
) => [T, (newState: T) => T, (observer: () => void) => void];

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
  const observers: (() => void)[] = [];

  function setState(newState: T) {
    if (newState !== state) {
      state = newState;
      observers.forEach((observer) => observer());
    }
    return state;
  }

  function addObserver(observer: () => void) {
    observers.push(observer);
  }

  return [state, setState, addObserver];
};
