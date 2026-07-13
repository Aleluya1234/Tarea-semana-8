import { useState, useEffect } from 'react'

function ClimaActual() {
  const [clima, setClima] = useState({
    temperatura: null,
    ciudad: 'Santiago',
    pais: 'CL',
    descripcion: 'Cargando...',
    humedad: null,
    viento: null
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setClima({
        temperatura: 18,
        ciudad: 'Santiago',
        pais: 'CL',
        descripcion: 'Nublado',
        humedad: '65%',
        viento: '12 km/h'
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Clima Actual
      </h2>
      
      {clima.temperatura === null ? (
        <p>Cargando datos del clima...</p>
      ) : (
        <div style={{
          backgroundColor: '#edf2f7',
          padding: '1.5rem',
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <p><strong>Temperatura:</strong> {clima.temperatura}°C</p>
          <p><strong>Ciudad:</strong> {clima.ciudad}, {clima.pais}</p>
          <p><strong>Descripción:</strong> {clima.descripcion}</p>
          <p><strong>Humedad:</strong> {clima.humedad}</p>
          <p><strong>Viento:</strong> {clima.viento}</p>
        </div>
      )}
    </div>
  )
}

export default ClimaActual