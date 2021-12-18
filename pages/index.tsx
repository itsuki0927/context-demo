import type { NextPage } from 'next';
import SimpleDashboard from '../components/simple/Dashboard';
import ReducerDashboard from '../components/reducer/Dashboard';
import { CountProvider } from '../context/counter';
import { ReducerCounterProvider } from '../context/reducerCounter';

const Home: NextPage = () => {
  return (
    <div>
      <h1>useState + useContext</h1>
      <CountProvider>
        <SimpleDashboard />
      </CountProvider>

      <br />
      <hr />

      <h1>useReducer + useContext</h1>
      <ReducerCounterProvider>
        <ReducerDashboard />
      </ReducerCounterProvider>
    </div>
  );
};

export default Home;
