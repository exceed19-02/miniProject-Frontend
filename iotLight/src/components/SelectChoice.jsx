import React, { useState } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const options=[{value: "MANUAL",label :"Manual"},
{value: "AUTO",label :"Auto"},
{value: "DISCO",label :"Disco"}]

const SelectChoice = () => {
  const [Op,SetOp] = useState("MANUAL")

  return (
    <Dropdown options={options} onChange={e => SetOp(e.value)} placeholder="Select an option" />
  )
}

export default SelectChoice