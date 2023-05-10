import React from "react";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react-lite";
import styles from "./Counter.module.css";
import { CounterViewModel } from "./CounterViewModel";

const Counter: React.FC = observer(() => {
    const counterViewModel = useInjection(CounterViewModel);

    return (
        <div>
            <div className={styles.counterDisplay}>{counterViewModel.count}</div>
            <button
                className={`${styles.button}`}
                onClick={() => counterViewModel.increment()}
            >
                Increment
            </button>
            <button
                className={`${styles.button} ${styles.decrement}`}
                onClick={() => counterViewModel.decrement()}
            >
                Decrement
            </button>
        </div>
    );
});

export default Counter;
