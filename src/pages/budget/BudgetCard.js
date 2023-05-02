import './Budget.css';

export const BudgetCard = ({name, amount}) => {
  return (
    <div className="budget-card">
    <div className="budget-card-amount">${amount}</div>
      <div className="budget-card-label">{name}</div>
    </div>
  )
}
