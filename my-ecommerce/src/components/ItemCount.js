import { useState } from 'react'
import '../styles/itemcount.css'

export default function ItemCount(props) {
    var stock = 7
    const [num, setNum] = useState(0)

    const upHandler = () => num < stock ? setNum(num + 1)
        : alert(`Stock of product: ${num}`)

    const subHandler = () => num > 0 ? setNum(num - 1)
        : alert(`Empty cart`)

    const resetHandler = () => setNum(0)

    const CounterValHandler = ()=>{props.onCountHandler(num)}
    

    return (
        <div className='counter-wrapper'>

            <div className='btn-container'>

                <button className='btn' onClick={subHandler}>
                    <img id='dwn' src={require('../img/icons/chevron-dwn.png')} alt='Button down' />
                </button>

                <p id='count'>{num}</p>

                <button className='btn'
                    onClick={upHandler}>
                    <img id='up' src={require('../img/icons/chevron-up.png')} alt='Button up' />
                </button>

            </div>

            <button className='add-btn'
                onClick={CounterValHandler}>
                Add to cart
            </button>

            <button className='reset-btn'
                onClick={resetHandler}>
                Reset
            </button>
        </div>
    )
}  