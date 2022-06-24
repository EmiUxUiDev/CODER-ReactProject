import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemCount />
      <ItemListContainer bebida='Gin'/>
    </div>
  );
}
export default App;
