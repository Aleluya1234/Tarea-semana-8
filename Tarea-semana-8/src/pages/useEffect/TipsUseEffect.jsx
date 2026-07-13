function TipsUseEffect() {
  return (
    <div>
      <h2>Tips clave de useEffect</h2>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ padding: '0.5rem', margin: '0.5rem 0', backgroundColor: '#f5f5f5' }}>
          <strong>1.</strong> Siempre piensa en la limpieza (return)
        </li>
        <li style={{ padding: '0.5rem', margin: '0.5rem 0', backgroundColor: '#f5f5f5' }}>
          <strong>2.</strong> Usa bien las dependencias para evitar bucles infinitos
        </li>
        <li style={{ padding: '0.5rem', margin: '0.5rem 0', backgroundColor: '#f5f5f5' }}>
          <strong>3.</strong> No pongas lógica que pueda ir directamente en el render
        </li>
      </ul>
    </div>
  )
}

export default TipsUseEffect