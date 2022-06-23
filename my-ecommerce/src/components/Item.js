import React from 'react'
import '../styles/item.css'

export default function Item({brand, path, recipe}) {
    return (
        <div className='item-container'>
            <img className='img-item' src={path} alt='Imagen bebida' />
            <div className='text-container'>
                <h4>{brand}</h4>
                <p>{recipe}</p>
            </div>
        </div>
    )
}
