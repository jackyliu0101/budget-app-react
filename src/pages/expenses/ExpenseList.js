import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';

export const ExpenseList = ({ expenses }) => {
  return (
    <div className="expenses-content">
      <h3>History</h3>
      <ul>
        {expenses.map(expense => (<ExpenseItem key={expense.id} expense={expense} />))}
      </ul>
    </div>
  )
}
