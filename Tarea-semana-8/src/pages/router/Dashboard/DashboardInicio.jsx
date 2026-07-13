import { Link, Routes, Route, Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
      <nav style={{
        backgroundColor: '#edf2f7',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        marginBottom: '1.5rem',
        display: 'flex',
        gap: '1rem'
      }}>
        <Link to="/dashboard">Resumen</Link>
        <Link to="/dashboard/estadisticas">Estadisticas</Link>
        <Link to="/dashboard/reportes">Reportes</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function DashboardInicio() {
  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Dashboard
      </h2>
      
      <div style={{ marginTop: '1rem' }}>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index element={
              <div>
                <h3>Resumen</h3>
                <p>Bienvenido al Dashboard. Aquí tienes un resumen de tu actividad.</p>
              </div>
            } />
            <Route path="estadisticas" element={
              <div>
                <h3>Estadisticas</h3>
                <p>Visualiza tus estadísticas de rendimiento.</p>
              </div>
            } />
            <Route path="reportes" element={
              <div>
                <h3>Reportes</h3>
                <p>Genera reportes detallados de tu actividad.</p>
              </div>
            } />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default DashboardInicio