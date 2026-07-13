import { useState, useEffect } from 'react'

function FeedNoticias() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const noticiasIniciales = [
      { id: 1, titulo: 'Nuevo proyecto de ley aprobado', tiempo: 'hace 2 min', categoria: 'Política' },
      { id: 2, titulo: 'El clima cambia en la región', tiempo: 'hace 1 hora', categoria: 'Clima' },
      { id: 3, titulo: 'Tecnología avanza en el país', tiempo: 'hace 3 horas', categoria: 'Tecnología' },
      { id: 4, titulo: 'Evento deportivo programado', tiempo: 'hace 5 horas', categoria: 'Deportes' }
    ]
    setNoticias(noticiasIniciales)

    const interval = setInterval(() => {
      const nuevasNoticias = [
        'Actualización de última hora',
        'Nuevo avance científico',
        'Cambios en el mercado'
      ]
      const nueva = nuevasNoticias[Math.floor(Math.random() * nuevasNoticias.length)]
      
      const nuevaNoticia = {
        id: Date.now(),
        titulo: nueva,
        tiempo: 'hace unos segundos',
        categoria: ['Política', 'Clima', 'Tecnología', 'Deportes'][Math.floor(Math.random() * 4)]
      }
      setNoticias(prev => [nuevaNoticia, ...prev])
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Feed de Noticias
      </h2>
      
      {noticias.map((noticia) => (
        <div 
          key={noticia.id} 
          style={{
            padding: '0.75rem',
            margin: '0.5rem 0',
            backgroundColor: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '4px'
          }}
        >
          <p style={{ fontWeight: 'bold', margin: 0 }}>{noticia.titulo}</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
            <small style={{ color: '#3182ce' }}>{noticia.categoria}</small>
            <small style={{ color: '#a0aec0' }}>{noticia.tiempo}</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeedNoticias