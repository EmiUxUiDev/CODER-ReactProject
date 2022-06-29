import { useState } from 'react'
import '../styles/itemcount.css'

export default function ItemCount({ stock }) {
    var stock = 7
    const [num, setNum] = useState(0)

    const add = () => num < stock ? setNum(num + 1) : alert(`Stock of product:${num}`)
    

    const sub = () => num > 0 ? setNum(num - 1) : alert(`Empty cart`)
    

    const reset = () => setNum(0)
    

    return (
        <div className='counter-wrapper'>
            <p>Gin selected</p>
            <div className='btn-container'>
                <button className='btn' onClick={sub}><img id='dwn' src={require('../img/icons/chevron-dwn.png')} alt='Button down' /></button>
                <p id='count'>{num}</p>
                <button className='btn' onClick={add}><img id='up' src={require('../img/icons/chevron-up.png')} alt='Button up' /></button>
            </div>
            <button className='add-btn'>Add to cart</button>
            <button className='reset-btn' onClick={reset}>Reset</button>
        </div>
    )
}