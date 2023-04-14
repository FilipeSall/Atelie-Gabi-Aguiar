import React, { createContext, useReducer } from 'react';

const GlobalContext = createContext();

const initialState = {};

const globalReducer = (state, action) => {
  switch (action.type) {
 
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
