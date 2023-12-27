import { createContext } from "react";
import { useReducer } from "react";
import { initialState, CartReducer } from "./CartReducer";
import {  Action } from "./CartReducer";

export const AddCartContext = createContext(initialState)
export const AddCartDispatchContext = createContext((() => 0) as React.Dispatch<Action>);

export default function AddCartContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <AddCartContext.Provider value={state}>
      <AddCartDispatchContext.Provider value={dispatch}>
        {children}
      </AddCartDispatchContext.Provider>
    </AddCartContext.Provider>
  );
}