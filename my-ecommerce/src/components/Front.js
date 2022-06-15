import React from 'react'
import '../styles/front.css'

export default function Front() {
    return (
        <section className='front-section'>
            <div className='front-text'>
                <h1>Enjoy your Gin, do it your way...</h1>
                <p>We all have a bit of TOC with all that thinks we love...<br/>Got it! and that's why we're sharing this place with you!</p>
                <button className='front-btn'>Let's drink!</button>
            </div>
            <img className='front-img' src={require('../img/gyn-cup.png')} alt='Gyn cup served' />
        </section>
    )
}