import { useState, useEffect, useRef } from 'react'

function ChatTiempoReal() {
  const [mensajes, setMensajes] = useState([
    { id: 1, usuario: 'Ana', texto: 'Hola!', hora: '10:00' },
    { id: 2, usuario: 'Luis', texto: 'Como estas?', hora: '10:01' }
  ])
  const [nuevoMensaje, setNuevoMensaje] = useState('')
  const [usuarioActual] = useState('Tu')
  const chatRef = useRef(null)

  useEffect(() => {
    // Scroll automático al final del chat
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [mensajes])

  useEffect(() => {
    const respuestas = [
      'Bien y tu?',
      'Que bueno!',
      'Nos vemos luego',
      'Gracias!',
      'Hasta pronto'
    ]
    let contador = 0

    const interval = setInterval(() => {
      if (contador < respuestas.length) {
        const ahora = new Date()
        const hora = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`
        
        setMensajes(prev => [
          ...prev,
          { 
            id: Date.now(), 
            usuario: 'Otro Usuario', 
            texto: respuestas[contador],
            hora: hora
          }
        ])
        contador++
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const enviarMensaje = () => {
    if (nuevoMensaje.trim() !== '') {
      const ahora = new Date()
      const hora = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`
      
      setMensajes([
        ...mensajes,
        { id: Date.now(), usuario: usuarioActual, texto: nuevoMensaje, hora: hora }
      ])
      setNuevoMensaje('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      enviarMensaje()
    }
  }

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Chat en Tiempo Real
      </h2>
      
      <div style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '0.5rem',
        height: '300px',
        overflowY: 'scroll',
        backgroundColor: 'white',
        marginTop: '1rem'
      }} ref={chatRef}>
        {mensajes.map((msg) => (
          <div 
            key={msg.id} 
            style={{
              padding: '0.3rem 0.5rem',
              marginBottom: '0.2rem',
              backgroundColor: msg.usuario === 'Tu' ? '#ebf8ff' : '#f7fafc',
              borderRadius: '4px'
            }}
          >
            <strong>{msg.usuario}:</strong> {msg.texto}
            <span style={{ color: '#a0aec0', fontSize: '0.75rem', marginLeft: '0.5rem' }}>
              {msg.hora}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '0.5rem', display: 'flex' }}>
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe un mensaje..."
          style={{ flex: 1, marginRight: '0.5rem' }}
        />
        <button onClick={enviarMensaje}>Enviar</button>
      </div>
    </div>
  )
}

export default ChatTiempoReal