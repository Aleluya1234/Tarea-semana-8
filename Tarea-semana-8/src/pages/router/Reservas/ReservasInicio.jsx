import { Link, Routes, Route } from 'react-router-dom'

function ReservasInicio() {
  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Reserva de Viajes
      </h2>
      
      <nav style={{
        backgroundColor: '#edf2f7',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        marginBottom: '1.5rem',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <Link to="/reservas">Paso 1: Destino</Link>
        <Link to="/reservas/fechas">Paso 2: Fechas</Link>
        <Link to="/reservas/pago">Paso 3: Pago</Link>
        <Link to="/reservas/confirmacion">Paso 4: Confirmacion</Link>
      </nav>

      <Routes>
        <Route index element={
          <div>
            <h3>Paso 1: Selecciona un Destino</h3>
            <p>Elige el destino para tu viaje.</p>
            <ul>
              <li>Playas del Caribe</li>
              <li>Montañas de los Andes</li>
              <li>Ciudad de Nueva York</li>
            </ul>
          </div>
        } />
        <Route path="fechas" element={
          <div>
            <h3>Paso 2: Selecciona las Fechas</h3>
            <p>Elige las fechas para tu viaje.</p>
            <p>Disponible desde el 1 de enero al 31 de diciembre.</p>
          </div>
        } />
        <Route path="pago" element={
          <div>
            <h3>Paso 3: Realiza el Pago</h3>
            <p>Completa los datos de pago para reservar.</p>
            <p>Total: $500.000</p>
          </div>
        } />
        <Route path="confirmacion" element={
          <div>
            <h3>Paso 4: Reserva Confirmada</h3>
            <p>Tu reserva ha sido confirmada exitosamente.</p>
            <p>Número de reserva: #123456</p>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default ReservasInicio