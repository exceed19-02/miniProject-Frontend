import React, { useState } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { updateLightMode } from "../services/light.js"

// {"light_id":1,"status":true,"mode":"AUTO","brightness":100}



const options=[{value: "MANUAL",label :"Manual"},
{value: "AUTO",label :"Auto"},
{value: "DISCO",label :"Disco"}]
const defaultOption = options[0]

const SelectChoice = ({setStatus}) => {
  const [Op,SetOp] = useState("MANUAL")
  const handleSubmit = async (Op,e) => {
    //console.log(e)
    if (e.value === "AUTO" || e.value === "DISCO") {
      setStatus(true)
    }
    
    else{
      setStatus(false)
    }
  
    const result = {"light_id":1,"status":true,"mode":e.value,"brightness":100}
    const res =  await updateLightMode(result)
  }
  return (
    <Dropdown options={options} onChange={(e) => handleSubmit(Op,e)} placeholder="Select an option"  value={defaultOption} />
    
  )
}

export default SelectChoice