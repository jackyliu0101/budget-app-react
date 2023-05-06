import { Button } from '../../components/Button';

export const BudgetModal = ({ showState, handleClose }) => {
  if (!showState) {
    return null
  }

  return (
    <div className="budget-modal">
      <section className="budget-modal-container">
        <div className="budget-modal-header">
          <h3>Add Budget</h3>
        </div>
        <div className="budget-modal-content">
          <form className="budget-modal-form">
            <div className="budget-modal-form-control">
              <label htmlFor="name">Budget Name</label>
              <input type="text" />
            </div>
            <div className="budget-modal-form-control">
              <label htmlFor="amount">Amount</label>
              <input type="number" />
            </div>
            <div className="budget-modal-buttons">
              <Button variant="default" title="Close" onClick={handleClose} />
              <Button variant="primary" title="Save" onClick={() => console.log("Save clicked")} />
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
