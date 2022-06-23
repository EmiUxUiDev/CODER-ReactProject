import React, { useEffect, useState } from 'react'
import '../styles/listcontainer.css'
import Item from './Item.js'

export default function ListContainer() {
    // CARGA DESDE JSON LOCAL---------------------------------------------------------------------------
    const [products, setproducts] = useState([])

    useEffect(()=>{
        fetch('argentinianGin.json')
            .then((res) => res.json())
            .then((data) => setproducts(data))
    }, [])

    return (
        <section className='wrapper-list'>
            {products && products.map(gin=> <Item brand={gin.brand} path={gin.path} recipe={gin.recipe} />)}
        </section>
    )
}