import React from "react";
import MediaQuery from "react-responsive";
import telegaWhite from '../../images/telega_white.svg'
import instaWhite from '../../images/insta_white.png'

function Icons() {
  return (
    <div className="icons">
      <>
        <MediaQuery minWidth={1065}>
          <a className="icon__link" href="@">
            <div className="icon icon_gold icon__telegram" />
          </a>
          <a className="icon__link margin" href="@">
            <div className="icon icon_gold icon__instagramm" />
          </a>
        </MediaQuery>
        <MediaQuery maxWidth={1064}>
          <h2 className="icons__title">Связь со мной</h2>
          <ul className="icons__container">
            <li className="icon__blue icons__btn">
              <a className="icons__link" href="@">
                    <img className="icon__telegram" src={telegaWhite} alt="telegram_icon"/>
                    <p className="icon__subtitle">Telegram</p>
              </a>
            </li>
            <li className="icon__pink icons__btn">
              <a className="icons__link" href="@">
                <img className="icon__instagramm" src={instaWhite} alt="instagram_icon"/>
                <p className="icon__subtitle">Instagram</p>
              </a>
            </li>
          </ul>
        </MediaQuery>
      </>
    </div>
  );
}

export default Icons;
