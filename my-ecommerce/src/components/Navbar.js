import '../styles/navbar.css'
import CartWidget from './CartWidget.js'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <nav className='nav-container'>
                <div className='logo-container'>
                    <Link to={'/'}><img className='logo-img' src={require('../img/gintocLogo.png')} alt='Gintoc brand logo' /></Link>
                    
                </div>
                <div className='menu-container'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/AboutUs'>About us</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </header>

    )
}