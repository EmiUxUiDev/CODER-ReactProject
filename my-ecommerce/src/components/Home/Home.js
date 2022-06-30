import React from 'react'
import './home.css'
import ItemCount from '../ItemCount.js'
import ItemListContainer from '../ItemListContainer.js'
export default function Home() {
    return (
        <>
            <ItemCount />
            <ItemListContainer />
        </>
    )
}

