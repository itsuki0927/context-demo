import createReducerCtx from '../utils/createReducerCtx';

type CounterActionTypes = { type: 'increment' } | { type: 'decrement' };

function reducer(state = 0, action: CounterActionTypes) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const [ReducerCounterProvider, useReducerCount, useReducerCountDispatch] = createReducerCtx(
  reducer,
  0
);

const useIncrement = () => {
  const setCount = useReducerCountDispatch();
  return () => setCount({ type: 'increment' });
};

const useDecrement = () => {
  const setCount = useReducerCountDispatch();
  return () => setCount({ type: 'decrement' });
};

const useAsyncIncrement = () => {
  const increment = useIncrement();

  return () =>
    new Promise(resolve =>
      setTimeout(() => {
        increment();
        resolve(true);
      }, 1000)
    );
};

export {
  ReducerCounterProvider,
  useReducerCount,
  useReducerCountDispatch,
  useIncrement,
  useDecrement,
  useAsyncIncrement,
};
