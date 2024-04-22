
import personajes from './data/personajes.js'
import Card from './componentes/app_cards/card.jsx'
import Button from './componentes/app_cards/Button.jsx'
import './App.css'

function App() {
  const personajesList = personajes.map(p =>{
    return <Card title={p.name} 
                  description={p.description} 
                  key={p.name} 
                  img={p.image}/>
  })
    return (
        <>
        <section className='App' >
        <h1>Tarjetas de Personajes con React</h1>
        <div className='container'>
          {personajesList}
        </div>
        <Button/>
        </section>

    </>
  )
}

export default App
