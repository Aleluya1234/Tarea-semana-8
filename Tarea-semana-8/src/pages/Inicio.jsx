import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div>
      <h1 style={{
        fontSize: '2rem',
        borderBottom: '3px solid #3182ce',
        paddingBottom: '0.5rem',
        marginBottom: '0.5rem'
      }}>
        Tarea Semana 8
      </h1>
      <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
        Ejercicios con useEffect y React Router
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }}>
        <div>
          <h2 style={{
            fontSize: '1.3rem',
            color: '#2d3748',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '0.3rem',
            marginBottom: '1rem'
          }}>
            useEffect
          </h2>
          <ul>
            <li style={{ padding: '0.3rem 0' }}><Link to="/clima">Clima Actual</Link></li>
            <li style={{ padding: '0.3rem 0' }}><Link to="/chat">Chat en Tiempo Real</Link></li>
            <li style={{ padding: '0.3rem 0' }}><Link to="/pomodoro">Contador Pomodoro</Link></li>
            <li style={{ padding: '0.3rem 0' }}><Link to="/feed">Feed de Noticias</Link></li>
            <li style={{ padding: '0.3rem 0' }}><Link to="/tips">Tips de useEffect</Link></li>
          </ul>
        </div>

        <div>
          <h2 style={{
            fontSize: '1.3rem',
            color: '#2d3748',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '0.3rem',
            marginBottom: '1rem'
          }}>
            React Router
          </h2>
          <ul>
            <li style={{ padding: '0.3rem 0' }}><Link to="/blog">Blog Personal</Link></li>
            <li style={{ padding: '0.3rem 0' }}><Link to="/tienda">Tienda Online</Link></li>
            <li style={{ padding: '0.3rem 0' }}><Link to="/dashboard">Dashboard</Link></li>
            <li style={{ padding: '0.3rem 0' }}><Link to="/reservas">Reserva de Viajes</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Inicio