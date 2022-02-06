import React from "react";
import MediaQuery from "react-responsive";

function Navigation({onClose}) {
  
  return (
    <nav className="navigation">
      <MediaQuery maxWidth={1064}>
        <h2 className="navigation__title">Навигация</h2>
      </MediaQuery>
      <ul className="navigation__container">
        <li className="navigation__links">
          <a className="navigation__link" href="#main" onClick={onClose}>
            Главная
          </a>
        </li>
        <li className="navigation__links">
          <a className="navigation__link" href="#blogers" onClick={onClose}>
            Кейсы
          </a>
        </li>
        <li className="navigation__links">
          <a className="navigation__link" href="#work" onClick={onClose}>
            Процессы работы
          </a>
        </li>
        <li className="navigation__links">
          <a className="navigation__link" href="#about" onClick={onClose}>
            Обо мне
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
