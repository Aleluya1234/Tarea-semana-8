import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div>
      <h1>Tarea Semana 8</h1>
      <p>Ejercicios con useEffect y React Router</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Ejercicios con useEffect</h2>
        <ul>
          <li><Link to="/clima">Clima Actual</Link></li>
          <li><Link to="/chat">Chat en Tiempo Real</Link></li>
          <li><Link to="/pomodoro">Contador Pomodoro</Link></li>
          <li><Link to="/feed">Feed de Noticias</Link></li>
          <li><Link to="/tips">Tips de useEffect</Link></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Ejercicios con React Router</h2>
        <ul>
          <li><Link to="/blog">Blog Personal</Link></li>
          <li><Link to="/tienda">Tienda Online</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/reservas">Reserva de Viajes</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Inicio