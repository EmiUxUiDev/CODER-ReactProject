import '../styles/item.css'
import { Link } from 'react-router-dom'

export default function Item({ id, brand, path, summary }) {
    return (
        <div className='container-item' key={id}>
            <img className='img-item' src={path} alt='Imagen bebida' />
            <div className='text-container-item'>
                <h4>{brand}</h4>
                <p>{summary}</p>
            </div>
            <hr />
            <div className='btn-container-item'>
            <Link to={`/Detail/${id}`}><button className='btn-item'>Ver detalle del producto</button></Link>
                <img className='img-btn-item' src={require('../img/icons/chevron-right.png')} alt='Icono detalle producto' />
            </div>
        </div>
    )
}
