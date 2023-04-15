import React from "react";
import { useCounterViewModelContext } from "./CounterViewModelContext";
import styles from "./Counter.module.css";

const Counter: React.FC = () => {
    const counterViewModel = useCounterViewModelContext();

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
