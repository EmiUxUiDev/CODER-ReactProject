import React from 'react'
import '../styles/item.css'

export default function Item({id, brand, path, summary}) {
    return (
        <div className='container-item' key={id}>
            <img className='img-item' src = {path} alt='Imagen bebida' />
            <div className='text-container-item'>
                <h4>{brand}</h4>
                <p>{summary}</p>
            </div>
            <hr/>
            <div className='btn-container-item'>
            <button className='btn-item'>Ver detalle del producto</button>
            <img className='img-btn-item' src={require('../img/icons/chevron-right.png')} alt='Icono detalle producto'/>
            </div>
        </div>
    )
}
