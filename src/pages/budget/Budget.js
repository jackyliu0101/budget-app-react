import './Budget.css';
import { useState } from 'react';
import { BudgetCardsList } from './BudgetCardsList';
import { Button } from '../../components/Button';
import { BudgetModal } from './BudgetModal';

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

  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className="total-budget-container">
        <h3>Total Budget:</h3>
        <h1>$0.00</h1>
        <hr/>
      </div>
      <div>
        <Button variant="primary" title="Add" onClick={onShowModal} />
      </div>
      <BudgetCardsList budgets={budgetItems}/>
      <BudgetModal showState={showModal} handleClose={() => setShowModal(false)} />
    </>
  )
}
