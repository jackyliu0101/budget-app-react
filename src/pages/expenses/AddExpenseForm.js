import { Button } from '../../components/Button';
import './Expenses.css';

export const AddExpenseForm = () => {
  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const expense = formJson.expense.trim();
    const amount = parseFloat(formJson.amount);

    console.log(expense);
    console.log(amount);
  }


  return (
    <div className="expenses-form-container">
      <h3>Add Expense</h3>
      <form className="add-form add-expense-form" onSubmit={submit}>
        <div className="expense-form-control form-control">
          <label htmlFor="expense">Expense</label>
          <input id="expense" name="expense" type="text" placeholder="Enter expense"/>
        </div>
        <div className="expense-form-control form-control">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount" type="number" placeholder="Enter amount" />
        </div>
        <Button type="submit" variant="primary" title="Save" />
      </form>
    </div>
  )
}
