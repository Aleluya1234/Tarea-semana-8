import { Link, Routes, Route } from 'react-router-dom'

function BlogInicio() {
  return (
    <div>
      <h2>Blog Personal</h2>
      
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/blog" style={{ marginRight: '1rem' }}>Inicio</Link>
        <Link to="/blog/articulos" style={{ marginRight: '1rem' }}>Articulos</Link>
        <Link to="/blog/acerca" style={{ marginRight: '1rem' }}>Acerca</Link>
        <Link to="/blog/contacto">Contacto</Link>
      </nav>

      <Routes>
        <Route index element={<p>Bienvenido al Blog</p>} />
        <Route path="articulos" element={<p>Lista de articulos</p>} />
        <Route path="acerca" element={<p>Sobre mi</p>} />
        <Route path="contacto" element={<p>Formulario de contacto</p>} />
      </Routes>
    </div>
  )
}

export default BlogInicio