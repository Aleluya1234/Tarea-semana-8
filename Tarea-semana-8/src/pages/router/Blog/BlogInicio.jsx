import { Link, Routes, Route } from 'react-router-dom'

function BlogInicio() {
  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Blog Personal
      </h2>
      
      <nav style={{
        backgroundColor: '#edf2f7',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        marginBottom: '1.5rem',
        display: 'flex',
        gap: '1rem'
      }}>
        <Link to="/blog">Inicio</Link>
        <Link to="/blog/articulos">Articulos</Link>
        <Link to="/blog/acerca">Acerca</Link>
        <Link to="/blog/contacto">Contacto</Link>
      </nav>

      <Routes>
        <Route index element={
          <div>
            <h3>Bienvenido al Blog</h3>
            <p>Aquí encontrarás artículos interesantes sobre tecnología.</p>
          </div>
        } />
        <Route path="articulos" element={
          <div>
            <h3>Lista de Artículos</h3>
            <ul>
              <li>Artículo 1: Introducción a React</li>
              <li>Artículo 2: Hooks en profundidad</li>
              <li>Artículo 3: React Router</li>
            </ul>
          </div>
        } />
        <Route path="acerca" element={
          <div>
            <h3>Sobre mí</h3>
            <p>Desarrollador web apasionado por React y el aprendizaje continuo.</p>
          </div>
        } />
        <Route path="contacto" element={
          <div>
            <h3>Contacto</h3>
            <p>Email: contacto@blog.com</p>
            <p>Teléfono: +56 9 1234 5678</p>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default BlogInicio