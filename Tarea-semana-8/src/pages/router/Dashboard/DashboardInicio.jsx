import { Link, Routes, Route, Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/dashboard" style={{ marginRight: '1rem' }}>Resumen</Link>
        <Link to="/dashboard/estadisticas" style={{ marginRight: '1rem' }}>Estadisticas</Link>
        <Link to="/dashboard/reportes">Reportes</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function DashboardInicio() {
  return (
    <div>
      <h2>Dashboard</h2>
      
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<p>Resumen del Dashboard</p>} />
          <Route path="estadisticas" element={<p>Estadisticas</p>} />
          <Route path="reportes" element={<p>Reportes</p>} />
        </Route>
      </Routes>
    </div>
  )
}

export default DashboardInicio