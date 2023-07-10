import { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { CalculateTotalMonetaryAmount } from '../../helper';
import { Header } from '../../components/Header';
import { BudgetCardsList } from './BudgetCardsList';
import { Button } from '../../components/Button';
import { BudgetModal } from './BudgetModal';
import './Budget.css';

export const Budget = () => {
  const { budgets } = useContext(GlobalContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);

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
      <Header title="Total Budget:" amount={'$' + CalculateTotalMonetaryAmount(budgets)} />
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
