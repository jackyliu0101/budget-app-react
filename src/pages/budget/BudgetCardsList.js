import './Budget.css';
import { BudgetCard } from './BudgetCard';

export const BudgetCardsList = ({budgets}) => {
  return (
    <div className="budget-cards-list">
      {budgets.map(budget => (<BudgetCard key={budget.id} name={budget.name} amount={budget.amount}/>))}
    </div>
  )
}
