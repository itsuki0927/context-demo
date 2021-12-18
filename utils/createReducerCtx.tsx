import { createContext, useContext, Dispatch, PropsWithChildren, useReducer, Reducer } from 'react';

function createReducerCtx<StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialValue: StateType
) {
  const stateContext = createContext<StateType | undefined>(undefined);
  const dispatchContext = createContext<Dispatch<ActionType> | undefined>(undefined);

  const useStore = () => {
    const context = useContext(stateContext);
    if (context === undefined) {
      throw new Error('useStore error');
    }
    return context;
  };

  const useDispatch = () => {
    const context = useContext(dispatchContext);
    if (context === undefined) {
      throw new Error('useDispatch error');
    }
    return context;
  };

  const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [store, dispatch] = useReducer(reducer, initialValue);

    return (
      <dispatchContext.Provider value={dispatch}>
        <stateContext.Provider value={store}>{children}</stateContext.Provider>
      </dispatchContext.Provider>
    );
  };

  return [ContextProvider, useStore, useDispatch] as const;
}

export default createReducerCtx;
