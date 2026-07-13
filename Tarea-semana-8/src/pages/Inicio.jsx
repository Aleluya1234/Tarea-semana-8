import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div>
      <div style={{
        backgroundColor: '#ebf8ff',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.2rem',
          color: '#2b6cb0',
          margin: 0
        }}>
          Tarea Semana 8
        </h1>
        <p style={{
          color: '#2c5282',
          fontSize: '1.1rem',
          marginTop: '0.25rem'
        }}>
          Ejercicios con useEffect y React Router
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            fontSize: '1.3rem',
            color: '#2d3748',
            borderBottom: '2px solid #3182ce',
            paddingBottom: '0.3rem',
            marginBottom: '1rem'
          }}>
            useEffect
          </h2>
          <ul>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/clima">Clima Actual</Link>
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/chat">Chat en Tiempo Real</Link>
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/pomodoro">Contador Pomodoro</Link>
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/feed">Feed de Noticias</Link>
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/tips">Tips de useEffect</Link>
            </li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            fontSize: '1.3rem',
            color: '#2d3748',
            borderBottom: '2px solid #3182ce',
            paddingBottom: '0.3rem',
            marginBottom: '1rem'
          }}>
            React Router
          </h2>
          <ul>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/blog">Blog Personal</Link>
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/tienda">Tienda Online</Link>
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li style={{ padding: '0.4rem 0' }}>
              <Link to="/reservas">Reserva de Viajes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Inicio