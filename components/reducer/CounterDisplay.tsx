import { useReducerCount } from '../../context/reducerCounter';

const CounterDisplay = () => {
  const count = useReducerCount();
  return <h1>{count}</h1>;
};

export default CounterDisplay;
