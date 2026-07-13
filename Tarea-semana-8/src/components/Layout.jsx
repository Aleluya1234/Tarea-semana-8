import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav style={{
        padding: '1rem',
        backgroundColor: '#333',
        color: 'white',
        marginBottom: '2rem'
      }}>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Inicio</Link>
        <span>|</span>
        <Link to="/clima" style={{ color: 'white', marginLeft: '1rem' }}>Clima</Link>
        <Link to="/chat" style={{ color: 'white', marginLeft: '1rem' }}>Chat</Link>
        <Link to="/pomodoro" style={{ color: 'white', marginLeft: '1rem' }}>Pomodoro</Link>
        <Link to="/feed" style={{ color: 'white', marginLeft: '1rem' }}>Feed</Link>
        <Link to="/tips" style={{ color: 'white', marginLeft: '1rem' }}>Tips</Link>
        <span style={{ marginLeft: '1rem' }}>|</span>
        <Link to="/blog" style={{ color: 'white', marginLeft: '1rem' }}>Blog</Link>
        <Link to="/tienda" style={{ color: 'white', marginLeft: '1rem' }}>Tienda</Link>
        <Link to="/dashboard" style={{ color: 'white', marginLeft: '1rem' }}>Dashboard</Link>
        <Link to="/reservas" style={{ color: 'white', marginLeft: '1rem' }}>Reservas</Link>
      </nav>
      <main style={{ padding: '0 2rem' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout