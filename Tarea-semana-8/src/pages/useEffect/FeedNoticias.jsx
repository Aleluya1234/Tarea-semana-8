import { useState, useEffect } from 'react'

function FeedNoticias() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const noticiasIniciales = [
      { id: 1, titulo: 'Noticia 1', tiempo: 'hace 2 min' },
      { id: 2, titulo: 'Noticia 2', tiempo: 'hace 1 hora' },
      { id: 3, titulo: 'Noticia 3', tiempo: 'hace 3 horas' }
    ]
    setNoticias(noticiasIniciales)

    // Simular nuevas noticias cada 10 segundos
    const interval = setInterval(() => {
      const nuevaNoticia = {
        id: Date.now(),
        titulo: `Noticia ${noticias.length + 1}`,
        tiempo: 'hace unos segundos'
      }
      setNoticias(prev => [nuevaNoticia, ...prev])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2>Feed de Noticias</h2>
      
      {noticias.map((noticia) => (
        <div key={noticia.id} style={{
          padding: '0.5rem',
          margin: '0.5rem 0',
          borderBottom: '1px solid #eee'
        }}>
          <p><strong>{noticia.titulo}</strong></p>
          <small style={{ color: '#666' }}>{noticia.tiempo}</small>
        </div>
      ))}
    </div>
  )
}

export default FeedNoticias