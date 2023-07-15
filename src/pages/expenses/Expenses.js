import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { CalculateTotalMonetaryAmount } from '../../helper';
import { Header } from '../../components/Header';
import { ExpenseList } from './ExpenseList';
import { AddExpenseForm } from './AddExpenseForm';
import './Expenses.css';

export const Expenses = () => {
  const { expenses, addExpense } = useContext(GlobalContext);

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
      <Header title="Total Expenses:" amount={'$' + CalculateTotalMonetaryAmount(expenses)} />
      <div className="expenses-container">
        <div className="expenses-history">
          <h3>History</h3>
          <ExpenseList expenses={expenses} />
        </div>
        <hr style={{ margin: "0 10px" }} />
        <AddExpenseForm handleSubmit={saveExpenseItem} />
      </div>
    </>
  )
}
