import React from 'react'
import '../styles/Switch.css'
import {useState} from 'react'

const Switch = () => {

  const [status,setStatus] = useState(false)

  return (
    <>
        <label class="switch">
        <input onChange={() => setStatus(true)} type="checkbox"/>
        <span className="slider"></span>
        </label>
    </>
  )
}

export default Switch