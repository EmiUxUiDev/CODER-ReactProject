import React from 'react'
import '../styles/searchitem.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SearchItem() {
  const [gins, setGin] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setGin(data.results)
      })
      .catch(error => console.log(error))
  }, [])

  // Funcion que toma valor de entrada del input con hook useState
  const searcher = (event) => {
    setSearch(event.target.value)
  }


  let ginResult = []
  // Filtro lo devuelto por el fetch, usando como argumento el valor del value del input
  if (!search) {
    ginResult = []
  } else {
    ginResult = gins.filter((elem) => elem.name.toLowerCase().includes(search.toLocaleLowerCase()))
  }


  return (
    <section className='main-wrapper'>

      <div className='title-wrapper'>
        <h4>
          -- Gin finder, choose one that suits you best ! --
        </h4>
      </div>
      <div className='input-wrapper'>
        {/* Bajo el evento onChange, invoco la funcion que toma los valores q van ingresando al input y me setean el hook */}
        <input
          type='text'
          value={search}
          onChange={searcher} className='search-el' placeholder='Search'>
        </input>

        <section className='category-wrapper'>
          <p>Origin</p>
          <p>Price</p>
        </section>
      </div>
      <div className='result-wrapper'>
        {ginResult.map((gin) => (
          <ul>
            <Link to={`/Detail/${gin.id}`}>
              <li>
                {`Id: ${gin.id} - name: ${gin.name} - gender: ${gin.gender} - origin: ${gin.origin.name}`}
              </li>
            </Link>
          </ul>
        ))}
      </div>

    </section>
  )
}
