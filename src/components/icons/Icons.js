import React from "react";
import MediaQuery from "react-responsive";
import Buttons from "../buttons/Buttons";

function Icons() {
  return (
    <div className="icons">
      <>
        <MediaQuery minWidth={1065}>
          <a className="icon__link" href="https://t.me/romashas">
            <div className="icon icon_gold icon__telegram" />
          </a>
          <a
            className="icon__link margin"
            href="https://instagram.com/romashaseymur?utm_medium=copy_link"
          >
            <div className="icon icon_gold icon__instagramm" />
          </a>
        </MediaQuery>
        <MediaQuery maxWidth={1064}>
          <h2 className="icons__title">Связь со мной</h2>
          <Buttons />
        </MediaQuery>
      </>
    </div>
  );
}

export default Icons;
