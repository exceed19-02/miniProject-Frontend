import React from 'react'
import { useState } from 'react'

const Slide = () => {
    const [brightness, setBrightness] = useState(1)
    return (
        <input
            type='range'
            onChange={(e) => setBrightness(e.target.value)}
            min={0}
            max={100}
            step={1}
            value = {brightness}
            className='custom-slider'>
        </input>
    )
}

export default Slide