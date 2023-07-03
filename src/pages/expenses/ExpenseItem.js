export const ExpenseItem = ({ expense }) => {
  return (
    <li>
      {expense.name} <span>${expense.amount.toFixed(2)}</span>
    </li>
  )
}
