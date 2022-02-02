import React from "react";
import video from "../../images/VideoFrame.jpg";

function PopupReview({isOpen, onClose}) {
  return (
    <div className={`popupNav__close ${isOpen ? "popupReview__open" : ""}`}>
      <div className="popupReview">
        <div className="popupReview__container">
          <p className="popupReview__text">Видеоотзыв</p>
          <button className="popupNav__btn" onClick={onClose}></button>
        </div>
        <img className="popupReview__img" src={video} alt="video" />
      </div>
    </div>
  );
}

export default PopupReview;
