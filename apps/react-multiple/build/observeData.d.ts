type SetStateInternal<T> = {
    _(partial: T | Partial<T> | {
        _(state: T): T | Partial<T>;
    }["_"]): void;
}["_"];
interface IApi<T> {
    getState: () => T;
    setState: SetStateInternal<T>;
    setObserver: (observer: (state: T) => void) => () => void;
}
type TCreateAPI<T> = (set: IApi<T>["setState"], get: IApi<T>["getState"], api: IApi<T>) => T;
type TObserveData = <T>(createState: TCreateAPI<T>) => IApi<T>;
export declare const observeData: TObserveData;
export {};
//# sourceMappingURL=observeData.d.ts.map