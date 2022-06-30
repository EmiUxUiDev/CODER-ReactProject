import './App.css'
import Navbar from './components/Navbar.js'
import Home from './components/Home/Home.js'
import Footer from './components/Footer.js'
import { Routes, Route, Switch, Link } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact.js'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div> 
  );
}