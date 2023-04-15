import { createContext, useContext } from "react";
import { CounterModel } from "./CounterModel";

const CounterViewModelContext = createContext<CounterModel | null>(null);

export const CounterViewModelProvider = CounterViewModelContext.Provider;

export const useCounterViewModelContext = (): CounterModel => {
    const context = useContext(CounterViewModelContext);

    if (!context) {
        throw new Error("useCounterViewModelContext must be used within a CounterViewModelProvider");
    }

    return context;
};
