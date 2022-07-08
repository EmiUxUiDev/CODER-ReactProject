import '../styles/itemdetail.css'
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
   
    const countHandler = (among) => {
        const amongProd = among
        console.log(amongProd)
    }

    return (
        <>
            <h1>GinToc - Product detail</h1>
            <section className='wrapper-detail'>

                <div className='content-detail'>
                    <div className='img-detail'>
                        <img
                            src={detail.image}
                            alt='Gin bottle selected' />
                    </div>
                    <div className='bar-detail'></div>
                    <div className="description-detail">
                        <h2>Name : {detail.name}</h2>
                        <p>Specie: {detail.species}</p>
                        <p>Gender: {detail.gender}</p>
                        <ItemCount onCountHandler={countHandler} />
                    </div>
                </div>
                
                <div className='btn-detail'>
                    <button className='buy-btn'>Buy now</button>
                    <Link to='/' className='back-btn'>Back</Link>
                </div>
            </section>
        </>
    )
}

