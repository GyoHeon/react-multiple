// type TRender = (props: object) => void;

type TObserveData = <T>(
  initialState: T
) => [T, (newState: T) => T, (observer: () => void) => void];

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
