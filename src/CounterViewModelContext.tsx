import { createContext, useContext } from 'react';
import { CounterModel } from './CounterModel';

export const CounterViewModelContext = createContext<CounterModel | null>(null);

export const useCounterViewModel = () => {
    const context = useContext(CounterViewModelContext);
    if (!context) {
        throw new Error('useCounterViewModel must be used within a CounterViewModelProvider');
    }
    return context;
};
