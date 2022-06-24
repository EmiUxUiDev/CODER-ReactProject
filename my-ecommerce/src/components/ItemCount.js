import React from 'react'
import '../styles/itemcount.css'

export default function ItemCount(props){
    return(
        <div className='counter-wrapper'>
            <p>Nombre del gin</p>
            <div className='btn-container'>
                <img id='dwn' src={require('../img/icons/chevron-dwn.png')} alt='Button down'/>
                <p id='count'>0</p>
                <img id='up' src={require('../img/icons/chevron-up.png')} alt='Button up'/> 
            </div>
            <button className='add-btn'>Add to cart</button>
        </div>
    )
}
