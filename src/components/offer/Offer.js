import React from "react";
import Buttons from "../buttons/Buttons";

function Offer() {
  return (
    <section className="offer">
      <h2 className="offer__title offer__margin">
        Мы предлагаем вам сделать
        <span className="gold-font"> совместный запуск</span>
      </h2>
      <p className="description text offer__margin_b">
        Без ваших <span className="bold">вложений</span>, всего <span className="bold">за 30 дней</span> и получить <span className="bold">новые результаты</span>.
        Свяжитесь с нами!
      </p>
      <Buttons />
      
    </section>
  );
}

export default Offer;
