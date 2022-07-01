import '../styles/detail.css'
import ItemCount from './ItemCount.js'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Detail() {
    const params = useParams()
    const [detail, setDetail] = useState([])


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.ginId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.image)
                setDetail(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <section className='wrapper-detail'>
            <div className='content-detail'>
                <div className='img-detail'>
                    <img src={detail.image} alt='Gin bottle selected' />
                </div>
                <div className='bar-detail'></div>
                <div className="description-detail">
                    <h2>Name: {detail.name} </h2>
                    <p>Specie: {detail.species}</p>
                    <p>Gender: {detail.gender}</p>
                    <ItemCount />
                </div>
            </div>
            {/* <hr/> */}
            <div className='btn-detail'>
                <button className='buy-btn'>Buy now</button>
                <Link to='/'><button className='back-btn'>Volver</button></Link>
            </div>
        </section>
    )
}

