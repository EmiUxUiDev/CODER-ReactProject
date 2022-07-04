import React from 'react'
import '../styles/searchitem.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function SearchItem({ products }) {
  const { filter } = useParams()
  console.log(filter)

  useEffect(() => {
    const filt = filter ? products.filter((product) =>
      product.origin === filter
    ) : ""
  })

  return (
    <section className='main-wrapper'>

      <div className='title-wrapper'>
        <h4>
          -- Gin finder, choose one that suits you best ! --
        </h4>
      </div>
      <section className='category-wrapper'>
        <ul>
          <li>
            <Link to={`Category/origin`}>Origin</Link>
          </li>
          <li>
            <Link to={`Category/gender`}>Gender</Link>
          </li>
          <li>
            <Link to={`Category/status`}>Status</Link>
          </li>
        </ul>
      </section>
      <hr />
    </section>
  )
}
