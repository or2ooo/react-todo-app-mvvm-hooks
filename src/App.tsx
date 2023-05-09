import React from "react";
import { Provider } from "inversify-react";
import Counter from "./Counter";
import styles from "./App.module.css";
import container from "./inversify.config";

const App: React.FC = () => {
  return (
    <Provider container={container}>
      <div className={styles.appContainer}>
        <div>
          <h1 className={styles.appTitle}>
            React Counter Example using MVVM Pattern, MobX and Inversify
          </h1>
          <Counter />
        </div>
      </div>
    </Provider>
  );
};

export default App;
