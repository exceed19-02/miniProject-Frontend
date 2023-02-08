import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ControlPanel from './components/ControlPanel'
import Switch from './components/Switch'
import SelectChoice from './components/SelectChoice'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <ControlPanel/>
    </>

    
  )
  
}

export default App
