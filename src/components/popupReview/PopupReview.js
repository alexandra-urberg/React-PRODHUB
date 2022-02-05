import React, { useState } from "react";
import ReactPlayer from "react-player";
import Controler from "../controler/Controler";

function PopupReview({ isOpen, onClose, video }) {
  const [isPlay, setIsPlay] = useState({ playing: false });

  const { playing } = isPlay;

  const handleToggle = () => {
    setIsPlay({ ...isPlay, playing: !isPlay.playing });
  };

  console.log(isPlay.playing);
  return (
    <div className={`popupNav__close ${isOpen ? "popupReview__open" : ""}`}>
      <div className="popupReview">
        <div className="popupReview__container">
          <p className="popupReview__text">Видеоотзыв</p>
          <button className="popupNav__btn" onClick={onClose}></button>
        </div>
        <div className="popupReview__img">
          <ReactPlayer
            className="popupReview__img"
            url={`${isOpen ? video : "none"}`}
            pip
            width="100%"
            height="20%"
            playing={playing}
            controls={false}
          />
          <Controler play={isPlay.playing} handlePlayPause={handleToggle} />
        </div>
      </div>
    </div>
  );
}

export default PopupReview;
