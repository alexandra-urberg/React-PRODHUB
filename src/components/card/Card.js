import React from "react";
import instaColor from "../../images/insta_color.png";

function Card(card) {
  return (
    <li className="card">
      <div className="card__container">
        <div className="card__user">
          <img className="card__image" src={card.image} alt={card.name} />
          <div className="card__user-personality">
            <p className="card__name gold">{card.name}</p>
            <div className="card__user-information">
              <img
                className="card__icon"
                src={instaColor}
                alt="instagram_icon"
              />
              <p className="card__insta-name">{card.insagram}</p>
            </div>
          </div>
        </div>
        <h3 className="card__area">{card.bussines}</h3>
        <ul className="card__box">
          <li className="card__user-info">
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
        <div className="border">
          <div className="card__amount-new">
            <h4 className="card__insta-name">Доход после:</h4>
            <p className="card__money gold">{card.salary_after}&#8381;</p>
          </div>
        </div>
        <button className="card__button card__button-text" href="@">Видеоотзыв</button>
      </div>
    </li>
  );
}

export default Card;
