import { AddExpenseForm } from './AddExpenseForm';
import { ExpenseList } from './ExpenseList'
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

  return (
    <>
      <div className="total-container">
        <h3>Total Expenses:</h3>
        <h1>$0.00</h1>
        <hr/>
      </div>
      <div className="expenses-container">
        <ExpenseList expenses={dummyExpenseItems}/>
        <hr style={{ margin: "0 10px" }} />
        <AddExpenseForm />
      </div>
    </>
  )
}
