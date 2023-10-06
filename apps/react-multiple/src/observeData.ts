interface IApi<T> {
  getState: () => T;
  setState: (newState: T) => void;
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

  const setState: IApi<TState>["setState"] = (newState) =>
    updateState(newState, observers);

  const updateState = (
    newState: TState,
    observers: Set<(state: TState) => void>
  ) => {
    if (newState === state) {
      return;
    }

    state = newState;
    observers.forEach((observer) => observer(newState));
  };

  const setObserver = (observer: (state: TState) => void) => {
    observers.add(observer);

    return () => observers.delete(observer);
  };

  const api = { getState, setState, setObserver };
  state = createState(setState, getState, api);

  return api;
};
