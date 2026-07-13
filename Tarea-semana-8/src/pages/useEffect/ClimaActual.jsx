import { useState, useEffect } from 'react'

function ClimaActual() {
  const [clima, setClima] = useState({
    temperatura: null,
    ciudad: 'Santiago',
    pais: 'CL',
    descripcion: 'Cargando...'
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setClima({
        temperatura: 18,
        ciudad: 'Santiago',
        pais: 'CL',
        descripcion: 'Nublado'
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <h2>Clima Actual</h2>
      
      {clima.temperatura === null ? (
        <p>Cargando datos del clima...</p>
      ) : (
        <div>
          <p><strong>Temperatura:</strong> {clima.temperatura}°C</p>
          <p><strong>Ciudad:</strong> {clima.ciudad}, {clima.pais}</p>
          <p><strong>Descripción:</strong> {clima.descripcion}</p>
        </div>
      )}
    </div>
  )
}

export default ClimaActual