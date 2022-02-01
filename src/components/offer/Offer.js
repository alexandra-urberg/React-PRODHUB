import React from "react";
import telegaWhite from "../../images/telega_white.svg";
import instaWhite from "../../images/insta_white.png";

function Offer() {
  return (
    <section className="offer">
      <h2 className="title text offer__margin">
        Мы предлагаем вам сделать{" "}
        <span className="gold-font"> совместный запуск</span>
      </h2>
      <p className="description text offer__margin_b">
        Без ваших <span className="bold">вложений</span>, всего <span className="bold">за 30 дней</span> и получить <span className="bold">новые результаты</span>.
        Свяжитесь с нами!
      </p>
      <ul className="icons__container">
        <li className="icon__blue icons__btn">
          <a className="icons__link" href="@">
            <img
              className="telegram"
              src={telegaWhite}
              alt="telegram_icon"
            />
            <p className="icon__subtitle">Telegram</p>
          </a>
        </li>
        <li className="icon__pink icons__btn">
          <a className="icons__link" href="@">
            <img
              className="instagramm"
              src={instaWhite}
              alt="instagram_icon"
            />
            <p className="icon__subtitle">Instagram</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Offer;
