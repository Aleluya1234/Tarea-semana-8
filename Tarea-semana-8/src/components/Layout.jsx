import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav style={{
        backgroundColor: '#2d3748',
        padding: '0.75rem 2rem',
        borderBottom: '3px solid #3182ce',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.25rem 1rem',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Inicio
        </Link>
        <span style={{ color: '#4a5568' }}>|</span>
        <span style={{ color: '#a0aec0', fontSize: '0.85rem' }}>useEffect:</span>
        <Link to="/clima" style={{ color: '#bee3f8' }}>Clima</Link>
        <Link to="/chat" style={{ color: '#bee3f8' }}>Chat</Link>
        <Link to="/pomodoro" style={{ color: '#bee3f8' }}>Pomodoro</Link>
        <Link to="/feed" style={{ color: '#bee3f8' }}>Feed</Link>
        <Link to="/tips" style={{ color: '#bee3f8' }}>Tips</Link>
        <span style={{ color: '#4a5568' }}>|</span>
        <span style={{ color: '#a0aec0', fontSize: '0.85rem' }}>Router:</span>
        <Link to="/blog" style={{ color: '#bee3f8' }}>Blog</Link>
        <Link to="/tienda" style={{ color: '#bee3f8' }}>Tienda</Link>
        <Link to="/dashboard" style={{ color: '#bee3f8' }}>Dashboard</Link>
        <Link to="/reservas" style={{ color: '#bee3f8' }}>Reservas</Link>
      </nav>
      
      <main style={{
        padding: '2rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout