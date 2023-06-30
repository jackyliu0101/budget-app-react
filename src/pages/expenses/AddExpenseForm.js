import { Button } from '../../components/Button';

export const AddExpenseForm = () => {
  return (
    <div>
      <h3>Add Expense</h3>
      <form className="add-form add-expense-form">
        <div className="expense-form-control form-control">
          <label htmlFor="expense">Expense</label>
          <input type="text" placeholder="Enter expense"/>
        </div>
        <div className="expense-form-control form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" placeholder="Enter amount" />
        </div>
        <Button type="submit" variant="primary" title="Save" />
      </form>
    </div>

  )
}
