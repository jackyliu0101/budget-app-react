import './Budget.css';
import { useState } from 'react';
import { BudgetCardsList } from './BudgetCardsList';
import { Button } from '../../components/Button';
import { BudgetModal } from './BudgetModal';

export const Budget = () => {
  const dummyBudgetItems = [
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
  const [budgetItems, setBudgetItems] = useState(dummyBudgetItems);

  const onShowModal = () => {
    setShowModal(true)
  }

  const addBudgetItem = (budgetInfo) => {
    let item = {
      id: Math.floor(Math.random() * 100000 + 5),
      name: budgetInfo.name,
      amount: budgetInfo.amount,
    }

    const updatedBudgetItems = [item, ...budgetItems]
    setBudgetItems(updatedBudgetItems);
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
      <BudgetModal showState={showModal} handleClose={() => setShowModal(false)} handleAddBudgetItem={addBudgetItem} />
    </>
  )
}
