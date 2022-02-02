import React from "react";
import MediaQuery from "react-responsive";
import img from "../../images/Image-4.png";
import clock from "../../images/clock_icon.svg";
import money from "../../images/money_icon.svg";

function About() {
  return (
    <section className="about" id="about">
      <>
        <MediaQuery minWidth={901}>
          <img className="about_img" src={img} alt="self_portrait"></img>
          <div className="about__container">
            <h3 className="title gold-font">Обо мне</h3>
            <p className="about__subtitle">
              Главный продюсер ProdHub — Роман Сеймур
            </p>
            <ul className="about__box mt">
              <li className="box work__at">
                <img className="about__icon" src={clock} alt="clock__icon" />
                <p className="description ml">В инфобизнесе с 2017 года</p>
              </li>
              <li className="box work__at">
                <img className="about__icon" src={money} alt="money__icon" />
                <p className="description ml">
                  Сделал продаж более чем на $3,000,000
                </p>
              </li>
            </ul>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={900}>
          <h3 className="title gold-font">Обо мне</h3>
          <p className="about__subtitle">
            Главный продюсер ProdHub — Роман Сеймур
          </p>
          <img className="about_img" src={img} alt="self_portrait"></img>
          <ul className="about__box mt">
            <li className="box work__at">
              <img className="about__icon" src={clock} alt="clock__icon"></img>
              <p className="description ml">В инфобизнесе с 2017 года</p>
            </li>
            <li className="box work__at">
              <img className="about__icon" src={money} alt="money__icon"></img>
              <p className="description ml">
                Сделал продаж более чем на $3,000,000
              </p>
            </li>
          </ul>
        </MediaQuery>
      </>
    </section>
  );
}

export default About;
