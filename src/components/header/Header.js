import React from "react";
import Container from "../container/Container";
import Navigation from "../navigation/Navigation";
import Icons from "../icons/Icons";

function Header() {
    return(
        <header className="header">
            <Container/>
            <Navigation/>
            <Icons/>
        </header>
    )
}

export default Header;