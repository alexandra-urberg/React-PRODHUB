import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import Container from "../container/Container";
import Navigation from "../navigation/Navigation";
import Icons from "../icons/Icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Header({ onOpen }) {
  useEffect(() => {
    Aos.init({ duration: 10000 });
  }, []);

  return (
    <header
      className="header section"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
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
