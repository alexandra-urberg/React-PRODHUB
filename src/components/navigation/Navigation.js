import React from "react";
import MediaQuery from "react-responsive";

function Navigation() {
    return(
        <nav className="navigation">
            <MediaQuery maxWidth={540}>
                <h2 className="navigation__title">Навигация</h2>
            </MediaQuery>
            <ul className="navigation__container">
                <li className="navigation__links"><a className="navigation__link" href="@">Главная</a></li>
                <li className="navigation__links"><a className="navigation__link" href="@">Кейсы</a></li>
                <li className="navigation__links"><a className="navigation__link" href="@">Процессы работы</a></li>
                <li className="navigation__links"><a className="navigation__link" href="@">Обо мне</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;