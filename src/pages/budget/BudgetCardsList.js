import './Budget.css';
import { BudgetCard } from './BudgetCard';

export const BudgetCardsList = ({budgets}) => {
  return (
    <div className="budget-cards-list">
      {budgets.map(budget => (<BudgetCard key={budget.id} budget={budget}/>))}
    </div>
  )
}
