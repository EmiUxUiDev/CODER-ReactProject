import React from 'react'
import '../styles/navbar.css'

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
            <div className='shop-container'>
                <button className='shop-btn'><img className='shop-img' src={require('../img/icons/shopping-bag.png')} alt='Shop icon'/></button>
            </div>
        </div>
            
    )
}