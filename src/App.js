import './App.css';
import { useState } from "react"
import { Button } from './components/Button';

function App() {
  const [btnType, setBtnType] = useState('default')

  const onRadioBtnChange = (e) => {
    setBtnType(e.target.value)
  }

  return (
    <div>
      <Button type={btnType} title={btnType}/>
      <div>
        <label>
          <input
            type="radio"
            name="radioBtnTest"
            value="default"
            onChange={onRadioBtnChange}
            defaultChecked />
            default
        </label>
        <label htmlFor="radioBtn2">
          <input type="radio" name="radioBtnTest" value="primary" onChange={onRadioBtnChange} />
            primary
        </label>
      </div>
    </div>
  )
}

export default App;
