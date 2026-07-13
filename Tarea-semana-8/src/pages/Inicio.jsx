import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div>
      <h1 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
        Tarea Semana 8
      </h1>
      <p style={{ color: '#4a5568' }}>Ejercicios con useEffect y React Router</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2d3748' }}>Ejercicios con useEffect</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '0.5rem 0' }}><Link to="/clima">Clima Actual</Link></li>
          <li style={{ padding: '0.5rem 0' }}><Link to="/chat">Chat en Tiempo Real</Link></li>
          <li style={{ padding: '0.5rem 0' }}><Link to="/pomodoro">Contador Pomodoro</Link></li>
          <li style={{ padding: '0.5rem 0' }}><Link to="/feed">Feed de Noticias</Link></li>
          <li style={{ padding: '0.5rem 0' }}><Link to="/tips">Tips de useEffect</Link></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2d3748' }}>Ejercicios con React Router</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '0.5rem 0' }}><Link to="/blog">Blog Personal</Link></li>
          <li style={{ padding: '0.5rem 0' }}><Link to="/tienda">Tienda Online</Link></li>
          <li style={{ padding: '0.5rem 0' }}><Link to="/dashboard">Dashboard</Link></li>
          <li style={{ padding: '0.5rem 0' }}><Link to="/reservas">Reserva de Viajes</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Inicio