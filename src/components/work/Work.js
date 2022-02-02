import React from "react";
import thumbsUp from "../../images/Icon_frame.svg";

function Work() {
  return (
    <section className="work" id="work">
      <h2 className="title ta mb">Как выглядит работа&nbsp;с нами</h2>
      <div className="work__container">
        <ul className="about__box box-1">
          <li className="box">
            <p className="work__border work__number gold">01</p>
            <p className="description ml width">
              Подписываем договор и соблюдаем все пункты
            </p>
          </li>
          <li className="box work__at">
            <p className="work__border work__number gold">02</p>
            <p className="description ml width">Мы готовим продукт</p>
          </li>
          <li className="box work__at">
            <p className="work__border work__number gold">03</p>
            <p className="description ml width">Делаем подробный прогрев план</p>
          </li>
          <li className="box">
            <p className="work__border work__number gold">04</p>
            <p className="description ml width">
              Ежедневно отправляем план сторис, что и как нужно записывать
            </p>
          </li>
          <li className="box work__at">
            <p className="work__border work__number gold">05</p>
            <p className="description ml width">Открываем продажи</p>
          </li>
        </ul>
        <div className="box-2">
          <ul className="about__box">
            <li className="box work__at">
              <p className="work__border work__number gold">06</p>
              <p className="description ml width">Делаем результат</p>
            </li>
            <li className="box">
              <p className="work__border work__number gold">07</p>
              <p className="description ml width">
                Прозрачно показываем всю статистику продаж и делим прибыль 50/50
              </p>
            </li>
          </ul>
          <div className="border work__mb">
            <div className="description__box work__box">
              <p className="description work__description">
                Все что вам нужно делать — просто следовать нашему плану на
                протяжении
              </p>
              <div className="work__button">
                <p className="work__text">30 дней</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img
              className="about__icon"
              src={thumbsUp}
              alt="icon_thumbsUp"
            ></img>
            <p className="description ml">
              Остальное сделает наша большая команда!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
