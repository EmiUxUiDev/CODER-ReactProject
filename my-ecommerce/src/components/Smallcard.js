import React from 'react'
import '../styles/smallcard.css'
function Smallcard({props}) {
   
    return (
        <div className='card-container'>
            {/* Aca si pondo el path normal con require, anda, pero no pasado por parametro. '{require(../img/500NochesPink.png)}' anda!*/}
            <img src={props.path} alt='Imagen bebida' />
            <div>
                {/* Hice una prueba para ver si me leia el rpop.path y trae bien el contenido */}
                <h4>{props.path}</h4>
                <p>Aenean erat velit, ultrices ac porta non, viverra aliquet enim.
                </p>
            </div>
        </div>
    )
}

export default Smallcard