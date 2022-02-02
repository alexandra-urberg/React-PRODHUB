import React from "react";
import MediaQuery from "react-responsive";

function Navigation() {
  return (
    <nav className="navigation">
      <MediaQuery maxWidth={1064}>
        <h2 className="navigation__title">Навигация</h2>
      </MediaQuery>
      <ul className="navigation__container">
        <li className="navigation__links">
          <a className="navigation__link" href="#examples">
            Главная
          </a>
        </li>
        <li className="navigation__links">
          <a className="navigation__link" href="@">
            Кейсы
          </a>
        </li>
        <li className="navigation__links">
          <a className="navigation__link" href="#work">
            Процессы работы
          </a>
        </li>
        <li className="navigation__links">
          <a className="navigation__link" href="#about">
            Обо мне
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
