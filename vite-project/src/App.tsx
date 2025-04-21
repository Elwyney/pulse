import './App.css'
function App() {
  const handleClick = () => {
    window.electronAPI?.getBarcode();
  };

  return (
    <>
      <div className="container">
        <div className='header'>
          <h1 className='title'>Импульс</h1>
          <nav className='nav'>
            <a href='#'>Штрих принтер</a>
            <a href='#'>Принтер</a>
          </nav>
          <span className='phone'>Телефон службы поддержки: 4-69</span>
        </div>
        <p className='description'>
          Забудьте о рутине — теперь всё автоматизировано. Вы сосредоточены на главном, а технические мелочи решаются сами собой. Время расти, а не разбираться с проблемами.
        </p>
        <div className='card'>
          <span className='card-title'>Штрих принтер</span>
          <p className='card-description'>
            Если штрих-принтер отказывается работать — запустите программу, она поможет найти и устранить причину сбоя.
          </p>
        </div>
        <button className='button' onClick={handleClick}>Начать выполнение задачи</button>
      </div>
    </>
  )
}

export default App
