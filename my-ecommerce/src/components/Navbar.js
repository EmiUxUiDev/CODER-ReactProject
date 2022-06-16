import React from 'react'
import '../styles/navbar.css'
import WidgetShop from './WidgetShop.js';

export default function Navbar(){
    return(
        <div className='nav-container'>
            <div className='logo-container'>
                <img className='logo-img' src={require('../img/gintocLogo.png')} alt='Gintoc brand logo'/>
            </div>
            <div className='menu-container'>
                <ul>
                    <li>
                        About us
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <WidgetShop />
        </div>
            
    )
}