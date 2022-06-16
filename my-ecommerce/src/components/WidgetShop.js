import React from 'react'
import '../styles/widgetshop.css'

export default function WidgetShop() {
    return (
        <div className='shop-container'>
            <button className='shop-btn'><img className='shop-img' src={require('../img/icons/shopping-bag.png')} alt='Shop icon' /></button>
        </div>
    )
}