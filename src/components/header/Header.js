import React from "react";
import MediaQuery from "react-responsive";
import Container from "../container/Container";
import Navigation from "../navigation/Navigation";
import Icons from "../icons/Icons";

function Header({ onOpen }) {
  return (
    <header className="header section">
      <>
        <MediaQuery minWidth={1065}>
          <Container />
          <Navigation />
          <Icons />
        </MediaQuery>
        <MediaQuery maxWidth={1064}>
          <Container />
          <button className="header__menu-button" onClick={onOpen}></button>
        </MediaQuery>
      </>
    </header>
  );
}

export default Header;
