function TipsUseEffect() {
  const tips = [
    {
      id: 1,
      titulo: 'Piensa en la limpieza',
      descripcion: 'Siempre retorna una función de limpieza en useEffect para evitar memory leaks.'
    },
    {
      id: 2,
      titulo: 'Usa bien las dependencias',
      descripcion: 'El array de dependencias determina cuándo se ejecuta el efecto. Vacío = una sola vez.'
    },
    {
      id: 3,
      titulo: 'No pongas lógica en el render',
      descripcion: 'UseEffect es para efectos secundarios, no para lógica que puede ir directamente en el render.'
    },
    {
      id: 4,
      titulo: 'Múltiples useEffect',
      descripcion: 'Puedes tener varios useEffect en un componente para separar responsabilidades.'
    }
  ]

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #3182ce', paddingBottom: '0.5rem' }}>
        Tips clave de useEffect
      </h2>
      
      <div style={{ marginTop: '1rem' }}>
        {tips.map((tip) => (
          <div 
            key={tip.id}
            style={{
              padding: '0.75rem',
              margin: '0.5rem 0',
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              borderLeft: '4px solid #3182ce'
            }}
          >
            <p style={{ fontWeight: 'bold', margin: 0 }}>{tip.titulo}</p>
            <p style={{ color: '#4a5568', margin: '0.25rem 0 0 0' }}>{tip.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TipsUseEffect