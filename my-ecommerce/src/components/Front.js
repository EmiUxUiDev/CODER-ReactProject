import React from 'react'
import '../styles/front.css'

export default function Front(){
    return(
        <section className='front-section'>
            
        <div className='text-container'>
            <h1>Disfruta tú gin, a tú forma...</h1>
            <p>Todos tenemos algo de TOC con lo que nos gusta, nosotros te entendemos, por eso, abrimos este lugar para vos!</p>
        </div>
        <img className='front-img' src={require('../img/gyn-cup.png')} alt='Gyn cup served'/>
    </section>
    )
}