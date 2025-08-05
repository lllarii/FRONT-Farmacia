function Cumprimento() {
  const hora = new Date().getHours();

  return (
     <div>
      {hora < 12 ? (
        <h2 className='text-5xl font-bold'>Bom dia!</h2>
      ) : hora < 18 ? (
        <h2 className='text-5xl font-bold'>Boa tarde!</h2>
      ) : (
        <h2 className='text-5xl font-bold'>Boa noite!</h2>
      )}
    </div>
  )
}

export default Cumprimento