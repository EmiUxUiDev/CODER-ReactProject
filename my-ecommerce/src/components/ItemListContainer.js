import { useEffect, useState } from 'react'
import '../styles/itemlistcontainer.css'
import Info from './Info.js';
import ItemList from './ItemList.js'
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ subject }) {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { filter } = useParams()
    console.log(filter);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch('https://rickandmortyapi.com/api/character')
                .then((res) => res.json())
                .then((data) => {
                    if (filter) {
                        const result = data.results.filter((item) => item.status === filter)
                        setProducts(result)
                        setIsLoading(false)
                    } else {
                        setProducts(data.results)
                        setIsLoading(false)
                    }
                })
                .catch(error => console.log(error))
            setIsLoading(false)
        }, 2000)
    }, [filter])


    return (
        <div className='wrapper-container'>

            <section className='item-section'>
                <div className='item-text'>
                    <h1>Enjoy your Gin, do it your way...</h1>
                    <p>We all have a bit of TOC with all that thinks we love...<br />Got it! and that's why we're sharing this place with you!</p>
                    <button className='item-btn'>Let's drink!</button>
                </div>
                <img className='item-img' src={require('../img/gyn-cup.png')} alt='Fresh gin cup served' />
            </section>

            <div className='title-wrapper'>
                <h4>
                    -- Gin finder, choose one that suits you best ! --
                </h4>
            </div>

            <h3> {subject} items</h3>

            {isLoading &&
                <div className='loader' >
                    <img src='../tocLoader.gif' alt='Gif loader' >
                        
                    </img>
                </div>
            }
            <ItemList gins={products} />
            <Info />
        </div>
    )
}