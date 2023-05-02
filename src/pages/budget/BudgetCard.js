import './Budget.css';

export const BudgetCard = ({budget}) => {
  return (
    <div className="budget-card" onClick={() => console.log(budget)}>
      <div className="budget-card-amount">${budget.amount.toFixed(2)}</div>
      <div className="budget-card-label">{budget.name}</div>
    </div>
  )
}
