import '../styles/detail.css'

export default function Detail(props) {    

    return (
        <section className='wrapper-detail'>
            <div className='img-detail'>
                <img src={props.image} alt='Gin bottle selected' />
            </div>
            <div className='bar-detail'></div>
            <div className="description-detail">
                {props.length !==0 && <h2>Name: {props[0].name} </h2>}
                {props.length !==0 && <p>Specie: {props[0].spicies}</p>}
                {props.length !==0 && <p>Gender: {props[0].gender}</p>}
            </div>
        </section>
    )
}

