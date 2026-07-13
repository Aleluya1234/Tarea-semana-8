import { useState, useEffect } from 'react'

function Pomodoro() {
  const [tiempo, setTiempo] = useState(25 * 60)
  const [activo, setActivo] = useState(false)
  const [sesiones, setSesiones] = useState(0)

  useEffect(() => {
    let interval = null

    if (activo && tiempo > 0) {
      interval = setInterval(() => {
        setTiempo(prev => prev - 1)
      }, 1000)
    } else if (activo && tiempo === 0) {
      setActivo(false)
      setSesiones(prev => prev + 1)
    }

    return () => clearInterval(interval)
  }, [activo, tiempo])

  const iniciar = () => setActivo(true)
  const pausar = () => setActivo(false)
  const reiniciar = () => {
    setActivo(false)
    setTiempo(25 * 60)
  }

  const minutos = Math.floor(tiempo / 60)
  const segundos = tiempo % 60

  return (
    <div>
      <h2>Contador Pomodoro</h2>
      
      <div style={{ fontSize: '3rem', margin: '2rem 0' }}>
        {String(minutos).padStart(2, '0')}:{String(segundos).padStart(2, '0')}
      </div>

      <div>
        <button onClick={iniciar} disabled={activo}>Iniciar</button>
        <button onClick={pausar} disabled={!activo}>Pausar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>

      <p style={{ marginTop: '1rem' }}>
        Sesiones completadas: {sesiones}
      </p>
    </div>
  )
}

export default Pomodoro