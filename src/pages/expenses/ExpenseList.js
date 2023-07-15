import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';

export const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map(expense => (<ExpenseItem key={expense.id} expense={expense} />))}
    </ul>
  )
}
