import React from "react";
import Counter from "./Counter";
import styles from "./App.module.css";

const App: React.FC = () => {

  return (
    <div className={styles.appContainer}>
      <div>
        <h1 className={styles.appTitle}>React Counter Example using MVVM Pattern and Hooks</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
