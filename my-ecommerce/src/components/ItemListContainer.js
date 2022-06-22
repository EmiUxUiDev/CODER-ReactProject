import React from 'react'
import '../styles/itemlistcontainer.css'

export default function ItemListContainer({bebida}) {
    return (
        <section className='item-section'>
            <div className='item-text'>
                <h1>Enjoy your {bebida}, do it your way...</h1>
                <p>We all have a bit of TOC with all that thinks we love...<br/>Got it! and that's why we're sharing this place with you!</p>
                <button className='item-btn'>Let's drink!</button>
            </div>
            <img className='item-img' src={require('../img/gyn-cup.png')} alt='Gyn cup served' />
        </section>
    )
}