import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  budgets: [
    {
      id: 1,
      name: "Food",
      amount: 100
    },
    {
      id: 2,
      name: "Entertainment",
      amount: 50,
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

  function updateBudget(budgetItem) {
    dispatch({
      type: 'UPDATE_BUDGET',
      payload: budgetItem,
    })
  }

  function addExpense(expenseItem) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseItem,
    })
  }

  return (
    <GlobalContext.Provider value={{budgets: state.budgets, expenses: state.expenses, addBudget, updateBudget, addExpense}}>
      {children}
    </GlobalContext.Provider>
  );
}
