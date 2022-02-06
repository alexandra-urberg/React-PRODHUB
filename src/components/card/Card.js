import React, { useState } from "react";
import instaColor from "../../images/insta_color.png";
import PopupReview from "../popupReview/PopupReview";

function Card(card) {
  const [isPopupVideo, setIsPopupVideo] = useState(false);

  const handleOpenVideo = () => {
    setIsPopupVideo(true);
  };

  const handleCloseVideo = () => {
    setIsPopupVideo(false);
  };

  return (
    <li className="card">
      <div className="card__container">
        <div className="card__user">
          <img className="card__image" src={card.image} alt={card.name} />
          <div className="card__user-personality">
            <p
              className={`card__name gold ${
                card.id === 2 ? "card__name-s" : ""
              }`}
            >
              {card.name}
            </p>
            <div className="card__user-information">
              <img
                className="card__icon"
                src={instaColor}
                alt="instagram_icon"
              />
              <a className="card__insta-name" href={card.insta_link}>
                {card.insagram}
              </a>
            </div>
          </div>
        </div>
        <h3 className={`card__area ${card.id === 2 ? "card__name-sp" : ""}`}>
          {card.bussines}
        </h3>
        <ul className={`card__box ${card.id === 1 ? "card__user-mg" : ""}`}>
          <li
            className={`card__user-info ${
              card.id === 5 ? "card__user-mg" : ""
            }`}
          >
            <p className="card__insta-name">Подписчиков:</p>
            <p className="card__amount">{card.subscribers}к</p>
          </li>
          <li className="card__user-info">
            <p className="card__insta-name">Охваты сторис:</p>
            <p className="card__amount">{card.stories}к</p>
          </li>
          <li className="card__user-info">
            <p className="card__insta-name">Доход до:</p>
            <p className="card__amount">{card.salary_before}&#8381;</p>
          </li>
        </ul>
        <div className="border border__width">
          <div className="card__amount-new">
            <h4 className="card__insta-name">Доход после:</h4>
            <p className="card__money gold">{card.salary_after}&#8381;</p>
          </div>
        </div>
        <button
          className="card__button card__button-text card__button-wdt"
          onClick={handleOpenVideo}
        >
          Видеоотзыв
        </button>
      </div>
      <PopupReview
        onClose={handleCloseVideo}
        isOpen={isPopupVideo}
        video={card.video}
        coverVideo={card.coverVideo}
      />
    </li>
  );
}

export default Card;
