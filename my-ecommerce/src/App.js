import './App.css';
import Front from './components/Front.js';
import Navbar from './components/Navbar.js';
import Info from './components/Info.js'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Front />
      <Info />
    </div>
  );
}

export default App;
