import './Budget.css';
import { useState, useContext } from 'react';
import { BudgetCardsList } from './BudgetCardsList';
import { Button } from '../../components/Button';
import { BudgetModal } from './BudgetModal';
import { Header } from '../../components/Header';
import { GlobalContext } from '../../context/GlobalState';

export const Budget = () => {
  const { budgets } = useContext(GlobalContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);

  const calculateTotalBudgetAmount = (budgetItems) => {
    const allBudgetAmounts = budgetItems.map(budgetItem => budgetItem.amount);
    return "$" + allBudgetAmounts.reduce((accumulator, current) => (accumulator += current), 0).toFixed(2);
  }

  const onShowModal = () => {
    setShowModal(true);
  }

  const onCloseModal = () => {
    setShowModal(false);
    setSelectedBudget(null);
  }

  const onBudgetCardClick = (budgetItem) => {
    setSelectedBudget(budgetItem);
    setShowModal(true);
  }

  return (
    <>
      <Header title="Total Budget:" amount={calculateTotalBudgetAmount(budgets)} />
      <div>
        <Button variant="primary" title="Add" onClick={onShowModal} />
      </div>
      <BudgetCardsList budgets={budgets} handleBudgetCardClick={onBudgetCardClick} />
      <BudgetModal
        showState={showModal}
        handleClose={onCloseModal}
        selectedBudget={selectedBudget} />
    </>
  )
}
