import './Budget.css';
import { BudgetCardsList } from './BudgetCardsList';

export const Budget = () => {
  return (
    <>
      <div className="total-budget-container">
        <h3>Total Budget:</h3>
        <h1>$0.00</h1>
        <hr/>
      </div>
      <BudgetCardsList />
    </>
  )
}
