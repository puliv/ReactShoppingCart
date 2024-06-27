// src/context/GlobalState.js
import React, { createContext, useContext, useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from "./actions";

// Crear el contexto
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// Estado inicial
const initialState = {
  cart: [],
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, count: 1 }],
        };
      }
    case INCREMENT_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
            : item
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Proveedor de Estado Global
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

// Hooks personalizados para usar el estado y el dispatch
export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
