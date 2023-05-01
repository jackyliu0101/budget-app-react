import './Budget.css';
import { BudgetCard } from './BudgetCard';

export const BudgetCardsList = () => {
  return (
    <div className="budget-cards-list">
      <BudgetCard/>
      <BudgetCard/>
    </div>
  )
}
