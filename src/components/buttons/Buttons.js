import React from "react";
import telega from "../../images/telega.svg";
import insta from "../../images/instagram_black.png";

function Buttons() {
  return (
    <ul className="buttons">
      <li className="button__gold button">
        <a className="button__link" href="https://t.me/romashas">
          <img className="telegram" src={telega} alt="telegram_icon" />
          <p className="button__subtitle">Telegram</p>
        </a>
      </li>
      <li className="button__gold button">
        <a
          className="button__link"
          href="https://instagram.com/romashaseymur?utm_medium=copy_link"
        >
          <img className="instagramm" src={insta} alt="instagram_icon" />
          <p className="button__subtitle">Instagram</p>
        </a>
      </li>
    </ul>
  );
}

export default Buttons;
