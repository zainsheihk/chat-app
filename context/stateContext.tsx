"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";

export const stateContext = createContext<any>([]);

export const StateProvider = ({
  initialState,
  reducer,
  children,
}: {
  initialState: any;
  reducer: any;
  children: ReactNode[];
}) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateProvider = () => useContext(stateContext);
