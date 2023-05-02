import './Budget.css';
import { BudgetCardsList } from './BudgetCardsList';
import { Button } from '../../components/Button';

export const Budget = () => {
  const budgetItems = [
    {
      id: 0,
      name: "Miscellaneous",
      amount: 20,
    },
    {
      id: 1,
      name: "Food",
      amount: 30.5
    },
  ]

  return (
    <>
      <div className="total-budget-container">
        <h3>Total Budget:</h3>
        <h1>$0.00</h1>
        <hr/>
      </div>
      <div>
        <Button type="primary" title="Add" />
      </div>
      <BudgetCardsList budgets={budgetItems}/>
    </>
  )
}
