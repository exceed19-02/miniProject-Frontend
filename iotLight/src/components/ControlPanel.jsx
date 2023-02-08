import React from 'react'
import { useState } from 'react'
import '../styles/ControlPanel.css'
import SelectChoice from './SelectChoice'
import Slide from './Slide'
import Switch from './Switch'


const ControlPanel = () => {
  return (
    <>
        <h1 className='Light-name'>Light-name</h1>
        <div className='ControlPanel Shadow'>
            <div className='Light-status'>
                <h2>Light status</h2>
            <div className='Light-status-circle'></div>
            </div>
            <div className='Light-control'>
                <div className='Switch-control'>
                    <h2>Switch</h2>
                    <Switch/>
                </div>
                <div className='Mode-control'>
                    <h2>Mode</h2>
                    <SelectChoice/>
                </div>
                <div className='Brightness-control'>
                    <h2>Brightness</h2>
                    <Slide/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ControlPanel