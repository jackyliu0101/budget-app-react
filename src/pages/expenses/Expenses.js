import './Expenses.css'

export const Expenses = () => {
  return (
    <>
      <div className="total-container">
        <h3>Total Expenses:</h3>
        <h1>$0.00</h1>
        <hr/>
      </div>
      <div className="expenses-container">
        <div className="expenses-content">
          <h3>History</h3>
          <ul className="expenses-list">
            <li>Test</li>
            <li>Test1</li>
            <li>Test2</li>
          </ul>
        </div>
        <hr style={{margin: "0 10px"}} />
        <div>
          <h3>Hello world</h3>
        </div>
      </div>
    </>
  )
}
