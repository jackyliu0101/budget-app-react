import { useState } from 'react';
import { AddExpenseForm } from './AddExpenseForm';
import { ExpenseList } from './ExpenseList';
import { Header } from '../../components/Header';
import './Expenses.css';

export const Expenses = () => {
  const dummyExpenseItems = [
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
  ];

  const [expenseItems, setExpenseItems] = useState(dummyExpenseItems);

  const calculateTotalExpenses = (expenseItems) => {
    const allExpenseAmounts = expenseItems.map(expenseItems => expenseItems.amount);
    return "$" + allExpenseAmounts.reduce((accumulator, current) => (accumulator += current), 0).toFixed(2);
  }

  const saveExpenseItem = (newExpenseInfo) => {
    const newExpenseItem = {
      id: Math.floor(Math.random() * 100000 + 5),
      name: newExpenseInfo.name,
      amount: newExpenseInfo.amount,
    };

    const updatedExpenseItems = [...expenseItems, newExpenseItem];
    setExpenseItems(updatedExpenseItems);
  }

  return (
    <>
      <Header title="Total Expenses:" amount={calculateTotalExpenses(expenseItems)} />
      <div className="expenses-container">
        <ExpenseList expenses={expenseItems} />
        <hr style={{ margin: "0 10px" }} />
        <AddExpenseForm handleSubmit={saveExpenseItem} />
      </div>
    </>
  )
}
