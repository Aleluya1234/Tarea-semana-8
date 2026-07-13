import { useState, useEffect } from 'react'

function Pomodoro() {
  const [tiempo, setTiempo] = useState(25 * 60)
  const [activo, setActivo] = useState(false)
  const [sesiones, setSesiones] = useState(0)
  const [pausado, setPausado] = useState(false)

  useEffect(() => {
    let interval = null

    if (activo && !pausado && tiempo > 0) {
      interval = setInterval(() => {
        setTiempo(prev => prev - 1)
      }, 1000)
    } else if (activo && tiempo === 0) {
      setActivo(false)
      setSesiones(prev => prev + 1)
    }

    return () => clearInterval(interval)
  }, [activo, pausado, tiempo])

  const iniciar = () => {
    setActivo(true)
    setPausado(false)
  }
  
  const pausar = () => setPausado(true)
  const reanudar = () => setPausado(false)
  
  const reiniciar = () => {
    setActivo(false)
    setPausado(false)
    setTiempo(25 * 60)
  }

  const minutos = Math.floor(tiempo / 60)
  const segundos = tiempo % 60

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Contador Pomodoro
      </h2>
      
      <div style={{
        backgroundColor: '#edf2f7',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center',
        marginTop: '1rem'
      }}>
        <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          {String(minutos).padStart(2, '0')}:{String(segundos).padStart(2, '0')}
        </div>

        <div>
          {!activo && (
            <button onClick={iniciar}>Iniciar</button>
          )}
          {activo && !pausado && (
            <button onClick={pausar}>Pausar</button>
          )}
          {activo && pausado && (
            <button onClick={reanudar}>Reanudar</button>
          )}
          <button onClick={reiniciar} style={{ backgroundColor: '#718096' }}>
            Reiniciar
          </button>
        </div>

        <p style={{ marginTop: '1rem' }}>
          <strong>Sesiones completadas:</strong> {sesiones}
        </p>
      </div>
    </div>
  )
}

export default Pomodoro