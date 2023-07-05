import { useState } from 'react';
import { Button } from '../../components/Button';
import './Expenses.css';

export const AddExpenseForm = ({ handleSubmit }) => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');

  const submit = (e) => {
    e.preventDefault();

    const expenseInfo = {
      name: expenseName,
      amount: parseFloat(amount),
    };

    handleSubmit(expenseInfo);
    setAmount('');
    setExpenseName('');
  }


  return (
    <div className="expenses-form-container">
      <h3>Add Expense</h3>
      <form className="add-form add-expense-form" onSubmit={submit}>
        <div className="expense-form-control form-control">
          <label htmlFor="expenseName">Expense</label>
          <input id="expenseName" type="text" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} placeholder="Enter expense"/>
        </div>
        <div className="expense-form-control form-control">
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} step="0.01" placeholder="Enter amount" />
        </div>
        <Button type="submit" variant="primary" title="Save" />
      </form>
    </div>
  )
}
