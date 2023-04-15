import React from 'react';
import Counter from './Counter';
import { useCounterViewModel } from './useCounterViewModel';
import { CounterViewModelContext } from './CounterViewModelContext';

const App: React.FC = () => {
  const counterViewModel = useCounterViewModel();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App with useState and ViewModel-first approach</h1>
      </header>
      <main>
        <CounterViewModelContext.Provider value={counterViewModel}>
          <Counter />
        </CounterViewModelContext.Provider>
      </main>
    </div>
  );
};

export default App;
