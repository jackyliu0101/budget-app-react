import './App.css';
import { Overview } from './pages/overview/Overview';
import { Budget } from './pages/budget/Budget';
import { Expenses } from './pages/expenses/Expenses';
import { SidePanel } from './components/SidePanel';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SidePanel />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
