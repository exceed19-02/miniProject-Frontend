
import { useState } from 'react'
import './App.css'
import ControlPanel from './components/ControlPanel'
import Switch from './components/Switch'
import SelectChoice from './components/SelectChoice'
import Map from './components/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Map />
      <ControlPanel/>
    </div>

    
  )
  
}

export default App;
