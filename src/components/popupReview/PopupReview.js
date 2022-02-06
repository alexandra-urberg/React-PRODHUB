import React, { useState } from "react";
import ReactPlayer from "react-player";
import Controler from "../controler/Controler";

function PopupReview({ isOpen, onClose, video, videoId }) {
  const [isPlay, setIsPlay] = useState({ playing: false });

  const { playing } = isPlay;

  const handleToggle = () => {
    setIsPlay({ ...isPlay, playing: !isPlay.playing });
  };

  //console.log(isPlay.playing);
  //console.log({videoId})
  return (
    <div className={`popupNav ${isOpen ? "popupNav__open" : ""}`}>
      <div className="popupReview">
        <div className="popupReview__container">
          <p className="popupReview__text">Видеоотзыв</p>
          <button className="popupNav__btn" onClick={onClose}></button>
        </div>
        <div className="popupReview__wrapper">
          <ReactPlayer
            url={`${isOpen ? video : "none"}`}
            pip={true}
            width="100%"
            height="100%"
            playing={playing}
          />
          <Controler play={isPlay.playing} handlePlayPause={handleToggle} />
        </div>
      </div>
    </div>
  );
}

export default PopupReview;
