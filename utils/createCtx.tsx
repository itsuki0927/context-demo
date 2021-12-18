import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from 'react';

function createCtx<T>(initialValue: T) {
  const stateContext = createContext<T | undefined>(undefined);
  const dispatchContext = createContext<Dispatch<SetStateAction<T>> | undefined>(undefined);

  const useStore = () => {
    const context = useContext(stateContext);
    if (context === undefined) {
      throw new Error('');
    }
    return context;
  };

  const useDispatch = () => {
    const context = useContext(dispatchContext);
    if (context === undefined) {
      throw new Error('');
    }
    return context;
  };

  const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [state, dispatch] = useState(initialValue);

    return (
      <dispatchContext.Provider value={dispatch}>
        <stateContext.Provider value={state}>{children}</stateContext.Provider>
      </dispatchContext.Provider>
    );
  };

  return [ContextProvider, useStore, useDispatch] as const;
}

export default createCtx;
