import { useState } from "react"
import Header from './components/Header'
import Inkop from './components/Inkop'
import Addera from './components/Addera'










function App() {
  const [ShowAddVara, setShowAddVara] = useState (false)
  const [inkop, setInkop] = useState([
    {
      id: 1,
      text: 'Mjölk',
      sort: 'Mejeri',
      reminder: true,
    },
    {
      id: 2,
      text: 'Citroner',
      sort: 'Frukt & Grönt',
      reminder: true,
    },
    {
      id: 3,
      text: 'Teres Major',
      sort: 'Kött (Nöt)',
      reminder: true,
    },
    {
      id: 4,
      text: 'Lax',
      sort: 'Fisk & Skaldjur',
      reminder: true,
    },
  ])

  //LÄGG TILL VARA:

  const adderaVara = (varor) => {
    
    const id = Math.floor(Math.random() * 10000) + 1
    const newVaror = { id, ...varor  }
    setInkop([ ...inkop, newVaror ])
  }

  //DELETE VARA:
  const deleteVara = (id) => {
    setInkop(inkop.filter((varor) => varor.id !== id))
  }


  //VIKTIG VARA:

  const toggleReminder = (id) => {
    setInkop(
      inkop.map((varor) => varor.id === id ? {
        ...varor, reminder:
          !varor.reminder
      } : varor))
  }


  return (
    <div className="container">
      <Header onAdd= {() => setShowAddVara (!ShowAddVara)} showAdd={ShowAddVara} />
      {ShowAddVara && <Addera onAdd={adderaVara} />}
      {inkop.length > 0 ? (
        <Inkop inkop={inkop} onDelete=
          {deleteVara} onToggle={toggleReminder}
        />) : ('Lägg till varor i Listan')}
    </div>
  )
}








export default App;


