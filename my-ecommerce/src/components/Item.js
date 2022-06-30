import '../styles/item.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Detail from './Detail.js'

export default function Item({ id, brand, path, summary }) {
    const params = useParams()
    const [detail, setDetail] = useState([])

    const catchDetail = () => {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then(res => res.json)
            .then(data => setDetail(data))
            .catch(error => console.log(error))
    }

    return (
        <div className='container-item' key={id}>
            <img className='img-item' src={path} alt='Imagen bebida' />
            <div className='text-container-item'>
                <h4>{brand}</h4>
                <p>{summary}</p>
            </div>
            <hr />
            <div className='btn-container-item'>
                <button className='btn-item' onClick={catchDetail}>Ver detalle del producto</button>
                {/* Diego, aca me quede...no logro hacerlo andar habilito el link, pagina en blanco...se me quemo la cabeza! */}
                {/* <Link to={`/Detail/:${params.id}`}><Detail props ={detail} /></Link> */}
                <img className='img-btn-item' src={require('../img/icons/chevron-right.png')} alt='Icono detalle producto' />
            </div>
        </div>
    )
}
