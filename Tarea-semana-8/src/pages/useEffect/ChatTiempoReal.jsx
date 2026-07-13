import { useState, useEffect } from 'react'

function ChatTiempoReal() {
  const [mensajes, setMensajes] = useState([
    { id: 1, usuario: 'Ana', texto: 'Hola!' },
    { id: 2, usuario: 'Luis', texto: 'Como estas?' }
  ])
  const [nuevoMensaje, setNuevoMensaje] = useState('')
  const [usuarioActual] = useState('Tu')

  const enviarMensaje = () => {
    if (nuevoMensaje.trim() !== '') {
      setMensajes([
        ...mensajes,
        { id: Date.now(), usuario: usuarioActual, texto: nuevoMensaje }
      ])
      setNuevoMensaje('')
    }
  }

  // Simular mensajes entrantes cada 5 segundos
  useEffect(() => {
    const respuestas = ['Bien y tu?', 'Que bueno!', 'Nos vemos luego']
    let contador = 0

    const interval = setInterval(() => {
      if (contador < respuestas.length) {
        setMensajes(prev => [
          ...prev,
          { id: Date.now(), usuario: 'Otro Usuario', texto: respuestas[contador] }
        ])
        contador++
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2>Chat en Tiempo Real</h2>
      
      <div style={{ 
        border: '1px solid #ccc', 
        padding: '1rem', 
        height: '300px', 
        overflowY: 'scroll',
        marginBottom: '1rem'
      }}>
        {mensajes.map((msg) => (
          <div key={msg.id} style={{ marginBottom: '0.5rem' }}>
            <strong>{msg.usuario}:</strong> {msg.texto}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder="Escribe un mensaje..."
          style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
        />
        <button onClick={enviarMensaje}>Enviar</button>
      </div>
    </div>
  )
}

export default ChatTiempoReal