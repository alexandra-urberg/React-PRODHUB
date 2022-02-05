import React from "react";

function Controler({handlePlayPause, play}) {
    return(
        <div className={`${!play ? "controls" : "controlsPause"}`} onClick={handlePlayPause}></div>
    )
}

export default Controler;