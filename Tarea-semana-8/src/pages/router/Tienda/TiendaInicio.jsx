import { Link, Routes, Route, useParams } from 'react-router-dom'

function ProductoDetalle() {
  const { id } = useParams()
  const productos = {
    '1': { nombre: 'Camiseta', precio: '$15.000' },
    '2': { nombre: 'Pantalón', precio: '$25.000' },
    '3': { nombre: 'Zapatos', precio: '$12.000' }
  }
  
  const producto = productos[id]
  
  return (
    <div>
      <h3>Detalle del Producto</h3>
      {producto ? (
        <div>
          <p><strong>Nombre:</strong> {producto.nombre}</p>
          <p><strong>Precio:</strong> {producto.precio}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  )
}

function TiendaInicio() {
  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Tienda Online
      </h2>
      
      <nav style={{
        backgroundColor: '#edf2f7',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        marginBottom: '1.5rem',
        display: 'flex',
        gap: '1rem'
      }}>
        <Link to="/tienda">Inicio</Link>
        <Link to="/tienda/productos">Productos</Link>
        <Link to="/tienda/carrito">Carrito</Link>
      </nav>

      <Routes>
        <Route index element={
          <div>
            <h3>Bienvenido a la Tienda</h3>
            <p>Encuentra los mejores productos al mejor precio.</p>
          </div>
        } />
        <Route path="productos" element={
          <div>
            <h3>Listado de Productos</h3>
            <ul>
              <li><Link to="/tienda/productos/1">Camiseta - $15.000</Link></li>
              <li><Link to="/tienda/productos/2">Pantalón - $25.000</Link></li>
              <li><Link to="/tienda/productos/3">Zapatos - $12.000</Link></li>
            </ul>
          </div>
        } />
        <Route path="productos/:id" element={<ProductoDetalle />} />
        <Route path="carrito" element={
          <div>
            <h3>Carrito de Compras</h3>
            <p>Tu carrito está vacío.</p>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default TiendaInicio