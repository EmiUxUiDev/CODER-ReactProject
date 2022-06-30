import './App.css'
import Navbar from './components/Navbar.js'
import Home from './components/Home/Home.js'
import Footer from './components/Footer.js'
import { Routes, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact.js'
import Detail from './components/Detail.js'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Detail/:ginId' element={<Detail />}></Route>
        {/* <Route path='*' element={<NotFound />}></Route> */}
      </Routes>
      <Footer />
    </div> 
  );
}