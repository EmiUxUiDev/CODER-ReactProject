import React from 'react'
import '../styles/smallcard.css'
import img1 from '../img/500NochesPink.png'
function Smallcard() {

    return (
        <div className='card-container'>
            {/* Aca si pondo el path normal con require, anda, pero no pasado por parametro. '{require(../img/500NochesPink.png)}' anda!*/}
            <img className='img-card' src={img1} alt='Imagen bebida' />
            
            <div className='text-container'>
                {/* Hice una prueba para ver si me leia el rpop.path y trae bien el contenido */}
                <h4>non, viverra aliquet.</h4>
                <p>Aenean erat velit, ultrices ac porta non, viverra aliquet enim.
                </p>
            </div>
        </div>
    )
}

export default Smallcard