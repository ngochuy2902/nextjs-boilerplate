'use client';

import type { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '@/store/features/counter/counterSlice';
import styles from './page.module.css';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button className={styles.button} onClick={() => dispatch(increment())}>
        +
      </button>
      <span>{count}</span>
      <button className={styles.button} onClick={() => dispatch(decrement())}>
        -
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>
    </div>
  );
}
