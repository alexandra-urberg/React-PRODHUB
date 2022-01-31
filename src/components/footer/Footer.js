import React from "react";
import Container from "../container/Container";
import Navigation from "../navigation/Navigation";
import Icons from "../icons/Icons";

function Footer() {
  return (
    <footer>
      <Container />
      <Navigation />
      <Icons />
      <div className="footer__container">
        <h3 className="footer__copyright">2022 все права защищены</h3>
        <p className="footer__confid">Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;
