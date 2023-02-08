import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/ControlPanel.css'
import SelectChoice from './SelectChoice'
import Slide from './Slide'
import Switch from './Switch'
import { getLight } from '../services/light.js'

const ControlPanel = () => {
    const [status,setStatus] = useState(false)
    const [light,setLight] = useState([])
    const room = ["Living room","Bedroom","Kitchen"]
    useEffect(() => {
        getLight(1).then((data) => setLight(data))})
        

  return (
    <>
        <h1 className='Light-name'>{room[light.light_id]}</h1>
        <div className='ControlPanel Shadow'>
            <div className='Light-status'>
                <h2>Light status</h2>
            <div className='Light-status-circle'></div>
            </div>
            <div className='Light-control'>
                <div className='Switch-control'>
                    <h2>Switch</h2>
                    <Switch status={status}/>
                </div>
                <div className='Mode-control'>
                    <h2>Mode</h2>
                    <SelectChoice setStatus={setStatus}/>
                </div>
                <div className='Brightness-control'>
                    <h2>Brightness</h2>
                    <Slide status={status}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ControlPanel