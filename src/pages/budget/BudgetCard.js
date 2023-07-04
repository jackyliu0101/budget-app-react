import './Budget.css';

export const BudgetCard = ({ budget, handleClick }) => {
  const onCardClick = () => {
    handleClick(budget);
  };

  return (
    <div className="budget-card" onClick={onCardClick}>
      <div className="budget-card-amount">${budget.amount.toFixed(2)}</div>
      <div className="budget-card-label">{budget.name}</div>
    </div>
  )
}
