import './App.css';
import ItemListContainer from './components/ItemListContainer.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer bebida='Gin'/>
    </div>
  );
}
export default App;
