import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  budgets: [
    {
      id: 1,
      name: "Miscellaneous",
      amount: 100,
    },
    {
      id: 2,
      name: "Food",
      amount: 30.5
    },
  ],
  expenses: [
    {
      id: 1,
      name: 'groceries',
      amount: 30,
    },
    {
      id: 2,
      name: 'book',
      amount: 25,
    }
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addBudget(budgetItem) {
    dispatch({
      type: 'ADD_BUDGET',
      payload: budgetItem,
    });
  }

  return (
    <GlobalContext.Provider value={{budgets: state.budgets, expenses: state.expenses, addBudget}}>
      {children}
    </GlobalContext.Provider>
  );
}
