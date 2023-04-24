import './App.css';
import { Overview } from './components/Overview';
import { SidePanel } from './components/SidePanel';

function App() {
  return (
    <div className="App">
      <SidePanel />
      <Overview />
    </div>
  )
}

export default App;
