import './App.css';
import ItemListContainer from './components/ItemListContainer.js';
import Navbar from './components/Navbar.js';
import Info from './components/Info.js';
import Smallcard from './components/Smallcard.js';
import argentinianGin from './db/argentinianGin.json'
// import Gins from './components/Gins.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer bebida='Gin'/>
      <Info />
      <Smallcard />
    </div>
  );
}
export default App;
