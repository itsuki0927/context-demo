import { useEffect } from 'react';
import { useAsyncIncrement, useDecrement, useIncrement } from '../../context/counter';

const CounterAction = () => {
  const increment = useIncrement();
  const decrement = useDecrement();
  const asyncIncrement = useAsyncIncrement();

  return (
    <div>
      <button onClick={asyncIncrement}>async +1</button>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default CounterAction;
