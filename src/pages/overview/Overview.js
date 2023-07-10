import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { CalculateTotalMonetaryAmount } from '../../helper';
import { Slider } from '../../components/Slider';
import './Overview.css';

export const Overview = () => {
  const { expenses, budgets } = useContext(GlobalContext);
  const totalExpense = CalculateTotalMonetaryAmount(expenses);
  const totalBudget = CalculateTotalMonetaryAmount(budgets);

  return (
    <div className="overview-container">
      <div>
        <h2>Your expenses this month</h2>
        <h3>${totalExpense} / ${totalBudget}</h3>
        <Slider
          currentValue={totalExpense}
          maxValue={totalBudget}
          isDisabled={true} />
        <hr />
      </div>
    </div>
  )
}
