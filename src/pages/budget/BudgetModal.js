import { Button } from '../../components/Button';

export const BudgetModal = ({ showState, handleClose, children }) => {
  if (!showState) {
    return null
  }

  return (
    <div className="budget-modal">
      <section className="budget-modal-container">
        {children}
        <Button type="default" title="Close" onClick={handleClose} />
      </section>
    </div>
  )
}
