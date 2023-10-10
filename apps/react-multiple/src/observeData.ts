type SetStateInternal<T> = {
  _(partial: T | Partial<T> | { _(state: T): T | Partial<T> }["_"]): void;
}["_"];

interface IApi<T> {
  getState: () => T;
  setState: SetStateInternal<T>;
  setObserver: (observer: (state: T) => void) => () => void;
}

type TCreateAPI<T> = (
  set: IApi<T>["setState"],
  get: IApi<T>["getState"],
  api: IApi<T>
) => T;

type TObserveData = <T>(createState: TCreateAPI<T>) => IApi<T>;

export const observeData: TObserveData = (createState) => {
  type TState = ReturnType<typeof createState>;
  let state: TState;
  const observers = new Set<(state: TState) => void>();

  const getState: IApi<TState>["getState"] = () => state;

  const setState: IApi<TState>["setState"] = (newState) => {
    let nextState: typeof newState = newState;

    if (typeof newState === "function") {
      nextState = (newState as (state: TState) => TState)(state);
    }

    updateState(nextState);
  };

  const updateState: SetStateInternal<TState> = (newState) => {
    if (!Object.is(newState, state)) {
      state = Object.assign({}, state, newState);
      observers.forEach((observer) => observer(state));
    }
  };

  const setObserver = (observer: (state: TState) => void) => {
    observers.add(observer);

    return () => observers.delete(observer);
  };

  const api = { getState, setState, setObserver };
  state = createState(setState, getState, api);

  return api;
};
