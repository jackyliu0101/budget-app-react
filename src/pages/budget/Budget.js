import './Budget.css';
import { useState } from 'react';
import { BudgetCardsList } from './BudgetCardsList';
import { Button } from '../../components/Button';
import { BudgetModal } from './BudgetModal';

export const Budget = () => {
  const dummyBudgetItems = [
    {
      id: 1,
      name: "Miscellaneous",
      amount: 20,
    },
    {
      id: 2,
      name: "Food",
      amount: 30.5
    },
  ]

  const [showModal, setShowModal] = useState(false);
  const [budgetItems, setBudgetItems] = useState(dummyBudgetItems);
  const [selectedBudget, setSelectedBudget] = useState(null);

  const calculateTotalBudgetAmount = (budgetItems) => {
    const allBudgetAmounts = budgetItems.map(budgetItem => budgetItem.amount)
    return "$" + allBudgetAmounts.reduce((accumulator, current) => (accumulator += current), 0).toFixed(2)
  }

  const onShowModal = () => {
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
    setSelectedBudget(null)
  }

  const saveBudgetItem = (budgetInfo) => {
    let item = {
      id: selectedBudget == null ? Math.floor(Math.random() * 100000 + 5) : selectedBudget.id,
      name: budgetInfo.name,
      amount: budgetInfo.amount,
    }

    let updatedBudgetItems = []
    if (selectedBudget == null) {
      updatedBudgetItems = [item, ...budgetItems]
    } else {
      updatedBudgetItems = budgetItems.map(budgetItem => {
        return (budgetItem.id === item.id) ? {...budgetItem, name: item.name, amount: item.amount } : budgetItem
      })
    }

    setBudgetItems(updatedBudgetItems);
  }

  const onBudgetCardClick = (budgetItem) => {
    setSelectedBudget(budgetItem)
    setShowModal(true)
  }

  return (
    <>
      <div className="total-budget-container">
        <h3>Total Budget:</h3>
        <h1>{calculateTotalBudgetAmount(budgetItems)}</h1>
        <hr/>
      </div>
      <div>
        <Button variant="primary" title="Add" onClick={onShowModal} />
      </div>
      <BudgetCardsList budgets={budgetItems} handleBudgetCardClick={onBudgetCardClick} />
      <BudgetModal
        showState={showModal}
        handleClose={onCloseModal}
        selectedBudget={selectedBudget}
        handleSaveBudgetItem={saveBudgetItem} />
    </>
  )
}
