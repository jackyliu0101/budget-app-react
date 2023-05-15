import { Button } from '../../components/Button';

export const BudgetModal = ({ showState, handleClose, handleAddBudgetItem }) => {
  if (!showState) {
    return null
  }


  const submit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries())
    const name = formJson.name.trim()
    const amount = parseFloat(formJson.amount)

    if (name.length > 0 && !isNaN(amount) && amount > 0) {
      const budget = {
        name: formJson.name,
        amount: parseFloat(formJson.amount)
      }
      handleAddBudgetItem(budget)
    }

    handleClose()
  }

  return (
    <div className="budget-modal">
      <section className="budget-modal-container">
        <div className="budget-modal-header">
          <h3>Add Budget</h3>
        </div>
        <div className="budget-modal-content">
          <form className="budget-modal-form" onSubmit={submit}>
            <div className="budget-modal-form-control">
              <label htmlFor="name">Budget Name</label>
              <input id="name" name="name" type="text" />
            </div>
            <div className="budget-modal-form-control">
              <label htmlFor="amount">Amount</label>
              <input id="amount" name="amount" type="number" step="0.01"/>
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
