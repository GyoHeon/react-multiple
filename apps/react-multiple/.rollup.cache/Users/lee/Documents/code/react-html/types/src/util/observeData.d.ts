type TObserveData = <T>(initialState: T) => [T, (newState: T) => T, (observer: (state: T) => void) => void];
export declare const observeData: TObserveData;
export {};
