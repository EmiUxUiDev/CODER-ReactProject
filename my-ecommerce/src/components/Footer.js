import React from 'react'
import '../styles/footer.css'

export default function Footer() {
    return (
        <section className='wrapper'>
            <div className='brand-container'>
                <img className='big-logo' src={require('../img/gintocBigLogo.png')} alt='Brand logo'/>
                <p>GINTOC</p>
            </div>

            <spam className='menu-container'>
                <ul>
                    <li>About us</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </spam>

            <spam className='social-container'>
                <a href='#'><i>Insta</i></a>
                <a href='#'><i>Faceb</i></a>
                <a href='#'><i>whats</i></a>
            </spam>

        </section>
    )
}