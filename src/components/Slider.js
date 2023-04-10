import { useState } from 'react';

export const Slider = ({ currentValue, maxValue, isDisabled}) => {
  const [value, setValue] = useState(currentValue);

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / maxValue}%` }
  }

  const getBackgroundColor = () => {
    return ((value / maxValue) > 0.85) ? { background: 'red' } : { background: '#999'}
  }

  return (
    <input
      className={`progress ${(value / maxValue > 0.85) ? "bg-red" : "bg-grey"}`}
      disabled={isDisabled}
      type="range"
      min="0"
      max={maxValue}
      value={value}
      style={getBackgroundSize()}
      onChange={(e) => setValue(e.target.value)}>
    </input>
  )
}
