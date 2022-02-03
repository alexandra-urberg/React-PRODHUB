import React from "react";

function PopupReview({ isOpen, onClose, video }) {
  

  return (
    <div className={`popupNav__close ${isOpen ? "popupReview__open" : ""}`}>
      <div className="popupReview">
        <div className="popupReview__container">
          <p className="popupReview__text">Видеоотзыв</p>
          <button
            className="popupNav__btn"
            onClick={onClose}
          ></button>
        </div>
        <iframe  className="popupReview__img" title="trueTitle" src={isOpen ? video : ""} allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
  );
}

export default PopupReview;
