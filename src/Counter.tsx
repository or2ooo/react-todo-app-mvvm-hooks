import React from 'react';
import { useCounterViewModel } from './CounterViewModelContext';

const Counter: React.FC = () => {
    const counterViewModel = useCounterViewModel();

    return (
        <div>
            <h1>Counter: {counterViewModel.count}</h1>
            <button onClick={counterViewModel.increment}>Increment</button>
            <button onClick={counterViewModel.decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
