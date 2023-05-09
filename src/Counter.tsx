import React from "react";
import { useInjection } from "inversify-react";
import { Observer, observer } from "mobx-react-lite";
import styles from "./Counter.module.css";
import { CounterViewModel } from "./CounterViewModel";

const Counter: React.FC = observer(() => {
    const counterViewModel = useInjection<CounterViewModel>('CounterModel');

    return (
        <Observer>
            {() => (
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
            )}
        </Observer>
    );
});

export default Counter;
