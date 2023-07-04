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

  return (
    <>
      <Header title="Total Expenses:" amount="$0.00" />
      <div className="expenses-container">
        <ExpenseList expenses={dummyExpenseItems} />
        <hr style={{ margin: "0 10px" }} />
        <AddExpenseForm />
      </div>
    </>
  )
}
