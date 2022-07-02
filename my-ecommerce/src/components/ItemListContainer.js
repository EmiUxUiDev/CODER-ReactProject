import { useEffect, useState } from 'react'
import '../styles/itemlistcontainer.css'
import Info from './Info.js';
import ItemList from './ItemList.js'
import SearchItem from './SearchItem.js'

export default function ItemListContainer() {

    const [products, setproducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch('https://rickandmortyapi.com/api/character')
                .then((res) => res.json())
                .then((data) => setproducts(data.results))
                .catch(error => console.log(error))
            setIsLoading(false)
        }, 2000)
    }, [])



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
            <SearchItem />
            <Info />
            {isLoading && <img className='loader' src='tocLoader.gif' alt='Gif loader' />}
            <ItemList gins={products} />
        </div>
    )
}