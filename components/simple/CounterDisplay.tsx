import { useCount } from '../../context/counter';

const CounterDisplay = () => {
  const count = useCount();
  return <h1>{count}</h1>;
};

export default CounterDisplay;
