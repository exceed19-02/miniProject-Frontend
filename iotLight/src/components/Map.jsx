import React from "react";
import Bulb from "./bulb";

const Map = () => {
  // console.log("jjj");
  return (
    <div className="Map">
      <h1>hello map</h1>

      <Bulb mode="rgb" status={true} brightness={100} />
    </div>
  );
};

export default Map;
