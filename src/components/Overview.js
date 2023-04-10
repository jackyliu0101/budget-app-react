import { Slider } from './Slider';
import './Overview.css';

export const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-content">
        <h2> Your expenses this month </h2>
        <h3> $500.00 </h3>
        <Slider />
        <hr />
      </div>
    </div>
  )
}
