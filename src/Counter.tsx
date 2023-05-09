import React from "react";
import styles from "./Counter.module.css";
import { useCounterViewModel } from "./useCounterViewModel";

const Counter: React.FC = () => {
    const counterViewModel = useCounterViewModel()

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
};

export default Counter;
