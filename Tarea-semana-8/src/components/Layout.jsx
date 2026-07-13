import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav style={{
        padding: '0.75rem 2rem',
        backgroundColor: '#1a202c',
        color: 'white',
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: 'white', fontWeight: 'bold', marginRight: '1rem' }}>
          Inicio
        </Link>
        <span style={{ color: '#4a5568' }}>|</span>
        <Link to="/clima" style={{ color: '#a0aec0' }}>Clima</Link>
        <Link to="/chat" style={{ color: '#a0aec0' }}>Chat</Link>
        <Link to="/pomodoro" style={{ color: '#a0aec0' }}>Pomodoro</Link>
        <Link to="/feed" style={{ color: '#a0aec0' }}>Feed</Link>
        <Link to="/tips" style={{ color: '#a0aec0' }}>Tips</Link>
        <span style={{ color: '#4a5568' }}>|</span>
        <Link to="/blog" style={{ color: '#a0aec0' }}>Blog</Link>
        <Link to="/tienda" style={{ color: '#a0aec0' }}>Tienda</Link>
        <Link to="/dashboard" style={{ color: '#a0aec0' }}>Dashboard</Link>
        <Link to="/reservas" style={{ color: '#a0aec0' }}>Reservas</Link>
      </nav>
      <main style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout