import '../styles/itemlist.css'
import Item from './Item.js'

export default function ItemList({gins}) {
    return (
        <section className='wrapper-list'>
            {gins && gins.map((gin) => <Item id={gin.id} brand={gin.name} path={gin.image} summary={gin.url} />)}
        </section>
    )
}