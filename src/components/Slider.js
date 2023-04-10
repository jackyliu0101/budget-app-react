import { useState } from 'react';

export const Slider = () => {
  const [value, setValue] = useState(20);
  const maxValue = 100;

  const onValueChange = e => {
    setValue(e.target.value)
  }

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / maxValue}%` }
  }

  const getBackgroundColor = () => {
    return ((value / maxValue) > 0.85) ? { background: 'red' } : { background: '#999'}
  }

  return (
    <input
      className={(value / maxValue > 0.85) ? "bg-red" : "bg-grey"}
      type="range"
      min="0"
      max={maxValue}
      value={value}
      style={getBackgroundSize()}
      onChange={(e) => onValueChange(e)}>
    </input>
  )
}
