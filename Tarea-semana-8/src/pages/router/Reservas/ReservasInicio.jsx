import { Link, Routes, Route } from 'react-router-dom'

function ReservasInicio() {
  return (
    <div>
      <h2>Reserva de Viajes</h2>
      
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/reservas" style={{ marginRight: '1rem' }}>Paso 1: Destino</Link>
        <Link to="/reservas/fechas" style={{ marginRight: '1rem' }}>Paso 2: Fechas</Link>
        <Link to="/reservas/pago" style={{ marginRight: '1rem' }}>Paso 3: Pago</Link>
        <Link to="/reservas/confirmacion">Paso 4: Confirmacion</Link>
      </nav>

      <Routes>
        <Route index element={<p>Selecciona un destino</p>} />
        <Route path="fechas" element={<p>Selecciona las fechas</p>} />
        <Route path="pago" element={<p>Realiza el pago</p>} />
        <Route path="confirmacion" element={<p>Reserva confirmada!</p>} />
      </Routes>
    </div>
  )
}

export default ReservasInicio