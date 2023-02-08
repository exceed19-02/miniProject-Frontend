import React from "react";
// import { useState, useEffect } from 'react'

const Bulb = (mode, status, brightness = 0) => {
  const Img = getBulbImg(mode, status, brightness);

  return (
    <div className="bulb">
      <div className="bulbImg">
        <img src={Img} alt="bulb" />
      </div>
    </div>
  );
};

function getBulbImg(mode, status, brightness) {
  if (status == false || brightness === 0) {
    return "assets/bulboff.png";
  }
  if (brightness <= 34) {
    return "assets/bulbdim.png";
  }
  if (brightness <= 67) {
    return "assets/bulbmed.png";
  }

  return "assets/bulbfull.png";
}

//TODO: add a function to get the correct bulb image based on mode (Disco mode and Auto mode)

export default Bulb;
