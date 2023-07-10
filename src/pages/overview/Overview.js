import { Slider } from '../../components/Slider';
import './Overview.css';

export const Overview = () => {
  return (
    <div className="overview-container">
      <div>
        <h2>Your expenses this month</h2>
        <h3>$500.00 / $550.00</h3>
        <Slider currentValue="500" maxValue="550" isDisabled={true}/>
        <hr />
      </div>
    </div>
  )
}
