import { useContext } from 'react';
import { AddExpenseForm } from './AddExpenseForm';
import { ExpenseList } from './ExpenseList';
import { Header } from '../../components/Header';
import { GlobalContext } from '../../context/GlobalState';
import './Expenses.css';

export const Expenses = () => {
  const { expenses, addExpense } = useContext(GlobalContext);

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

    addExpense(newExpenseItem);
  }

  return (
    <>
      <Header title="Total Expenses:" amount={calculateTotalExpenses(expenses)} />
      <div className="expenses-container">
        <ExpenseList expenses={expenses} />
        <hr style={{ margin: "0 10px" }} />
        <AddExpenseForm handleSubmit={saveExpenseItem} />
      </div>
    </>
  )
}
