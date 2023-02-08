import React from 'react'
import '../styles/Switch.css'
import {useState} from 'react'


const Switch = ({status}) => {

  const [onoff,setOnoff] = useState(false)
  

  return (
    <>
        <label className="switch">
        <input onChange={() => console.log()} disabled={status} type="checkbox"/>
        <span className="slider"></span>
        </label>
    </>
  )
}

export default Switch