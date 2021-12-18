import createCtx from '../utils/createCtx';

const [CountProvider, useCount, useCountDispatch] = createCtx(0);

const useIncrement = () => {
  const setCount = useCountDispatch();

  return () => setCount(c => c + 1);
};

const useDecrement = () => {
  const setCount = useCountDispatch();

  return () => setCount(c => c - 1);
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

export { CountProvider, useCount, useCountDispatch, useIncrement, useDecrement, useAsyncIncrement };
