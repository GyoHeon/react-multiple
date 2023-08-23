type TRender = (props: object) => void;

type TObserveData = <T>(
  initialState: T
) => [T, (newState: T, name: string) => void, (observer: TRender) => void];

export const observeData: TObserveData = <T>(initialState: T) => {
  let state = initialState;
  const observers: TRender[] = [];

  function setState(newState: T, name: string) {
    if (newState !== state) {
      state = newState;
      observers.forEach((observer) => observer({ [name]: state }));
    }
  }

  function addObserver(observer: TRender) {
    observers.push(observer);
  }

  return [state, setState, addObserver];
};
