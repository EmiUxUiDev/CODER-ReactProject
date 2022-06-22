import React, { useState } from 'react'

const Gins = () => {
  let ginss = []
  
  // CARGA LISTA DESDE JSON LOCAL---------------------------------------------------------------------------

    const respuesta =  fetch('../db/argentinianGin.json')
    ginss =  respuesta.json()
  

  const [gins, setGins] = useState(ginss)
  return (
    <div>
      {gins.map((prod) => {
        return (
          <div>
            <h1>Hola GIN </h1>
          </div>
        )
      })}
    </div>
  )
}

export default Gins