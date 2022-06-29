import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemCount />
      <ItemListContainer />
      <Footer/>
    </div>
  );
}