import { Link, Routes, Route, useParams } from 'react-router-dom'

function ProductoDetalle() {
  const { id } = useParams()
  return <p>Detalle del producto {id}</p>
}

function TiendaInicio() {
  return (
    <div>
      <h2>Tienda Online</h2>
      
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/tienda" style={{ marginRight: '1rem' }}>Inicio</Link>
        <Link to="/tienda/productos" style={{ marginRight: '1rem' }}>Productos</Link>
        <Link to="/tienda/carrito">Carrito</Link>
      </nav>

      <Routes>
        <Route index element={<p>Bienvenido a la Tienda</p>} />
        <Route path="productos" element={<p>Listado de productos</p>} />
        <Route path="productos/:id" element={<ProductoDetalle />} />
        <Route path="carrito" element={<p>Carrito de compras</p>} />
      </Routes>
    </div>
  )
}

export default TiendaInicio