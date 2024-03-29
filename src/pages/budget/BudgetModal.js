import { Button } from '../../components/Button';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const BudgetModal = ({ showState, selectedBudget, handleClose }) => {
  const { addBudget, updateBudget } = useContext(GlobalContext);
  if (!showState) {
    return null;
  }

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const name = formJson.name.trim();
    const amount = parseFloat(formJson.amount);

    if (name.length > 0 && !isNaN(amount) && amount > 0) {
      const budget = {
        id: selectedBudget == null ? Math.floor(Math.random() * 100000 + 5) : selectedBudget.id,
        name: name,
        amount: amount,
      }

      if (selectedBudget == null) {
        addBudget(budget);
      } else {
        updateBudget(budget);
      }
    }

    handleClose();
  }

  return (
    <div className="budget-modal">
      <section className="budget-modal-container">
        <div className="budget-modal-header">
          { (selectedBudget == null) ?  <h3>Add Budget</h3> : <h3>Edit Budget</h3> }
        </div>
        <div className="budget-modal-content">
          <form className="budget-modal-form add-form" onSubmit={submit}>
            <div className="budget-form-control form-control">
              <label htmlFor="name">Budget Name</label>
              <input id="name" name="name" type="text" defaultValue={selectedBudget ? selectedBudget.name : ''}/>
            </div>
            <div className="budget-form-control form-control">
              <label htmlFor="amount">Amount</label>
              <input id="amount" name="amount" type="number" step="0.01" defaultValue={selectedBudget ? selectedBudget.amount : ''}/>
            </div>
            <div className="budget-modal-buttons">
              <Button variant="default" title="Close" onClick={handleClose} />
              <Button type="submit" variant="primary" title="Save" />
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
