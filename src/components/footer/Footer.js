import React from "react";
import Container from "../container/Container";
import Navigation from "../navigation/Navigation";
import Icons from "../icons/Icons";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__navigation">
        <Container />
        <Navigation />
        <Icons />
      </div>
      <div className="footer__container">
        <h3 className="footer__copyright margin-bottom">
          &#169; 2022 все права защищены
        </h3>
        <p className="footer__copyright gold">Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;
