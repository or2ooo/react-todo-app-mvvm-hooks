import React from "react";
import Counter from "./Counter";
import { CounterViewModelProvider } from "./CounterViewModelContext";
import { useCounterViewModel } from "./useCounterViewModel";
import styles from "./App.module.css";

const App: React.FC = () => {
  const counterViewModel = useCounterViewModel();

  return (
    <div className={styles.appContainer}>
      <div>
        <h1 className={styles.appTitle}>React ViewModel-first Approach with Context</h1>
        <CounterViewModelProvider value={counterViewModel}>
          <Counter />
        </CounterViewModelProvider>
      </div>
    </div>
  );
}

export default App;
