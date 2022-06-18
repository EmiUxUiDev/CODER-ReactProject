import './App.css';
import Front from './components/Front.js';
import Navbar from './components/Navbar.js';
import Info from './components/Info.js';
import Smallcard from './components/Smallcard';
import argentinianGin from './db/argentinianGin.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Front />
      <Info />
      <Smallcard props={argentinianGin[0]} />
    </div>
  );
}
export default App;
