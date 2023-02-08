import React from 'react'
import '../styles/Switch.css'
import useState from 'react'

const Switch = () => {

// const [status,setStatus] = useState(false)

  return (
    <>
        <label class="switch">
        <input type="checkbox"/>
        <span class="slider"></span>
        </label>
    </>
  )
}

export default Switch