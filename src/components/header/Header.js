import React from "react";
import MediaQuery from "react-responsive";
import Container from "../container/Container";
import Navigation from "../navigation/Navigation";
import Icons from "../icons/Icons";

function Header() {
  return (
    <header className="header section">
      <>
        <MediaQuery minWidth={541}>
          <Container />
          <Navigation />
          <Icons />
        </MediaQuery>
        <MediaQuery maxWidth={540}>
          <Container />
          <button className="header__menu-button"></button>
        </MediaQuery>
      </>
    </header>
  );
}

export default Header;
