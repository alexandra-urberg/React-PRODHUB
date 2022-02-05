import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import array from "../../images/array.svg";
import insta_gold from "../../images/insta_gold.png";
import iPhone_mockup from "../../images/iPhone_mockup.png";
import insta_fade from "../../images/insta_fade.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Promo() {
  useEffect(() => {
    Aos.init({ duration: 40000 });
  }, []);

  return (
    <section className="promo" id="main">
      <MediaQuery minWidth={1000}>
        <div className="container">
          <h1
            className="promo__title promo__m"
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="2000"
            data-aos-easing="ease"
          >
            Сделаем качественный запуск и увеличим доход с&nbsp;вашего
            инстаграма
            <span className="gold span">
              {" "}
              в&nbsp;10–&nbsp;100 раз за 30 дней
            </span>
          </h1>
          <img
            src={insta_gold}
            alt="gold_icon"
            className="container__img"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="3000"
            data-aos-easing="ease-in-back"
          />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={999}>
        <h1
          className="promo__title promo__center"
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="2000"
          data-aos-easing="ease"
        >
          СДЕЛАЕМ КАЧЕСТВЕННЫЙ ЗАПУСК
        </h1>
        <div
          className="border promo__margin"
          data-aos-delay="120"
          data-aos-duration="2000"
          data-aos-easing="ease-in-back"
        >
          <div className="promo__box">
            <p className="promo__offer" data-aos="fade-up">
              Увеличим доход с вашего инстаграма за 30 дней
            </p>
            <div className="promo__container">
              <div className="promo__background">
                <p className="promo__title gold">
                  В&nbsp;10&nbsp;–100&nbsp;РАЗ
                </p>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <a
        className="promo__button"
        href="#examples"
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
      >
        <p className="promo__text">Узнать подробнее</p>
        <img className="promo__icon" src={array} alt="array_down" />
      </a>
      <MediaQuery minWidth={1000}>
        <div className="promo__img-container">
          <img
            src={insta_fade}
            alt="gold_icon"
            className="container__img-opacity"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="2000"
            data-aos-easing="ease-in-back"
          />
          <img
            src={iPhone_mockup}
            alt="iphone"
            className="container__img-phone"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="2000"
            data-aos-easing="ease-in-back"
          />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={999}>
        <img
          src={insta_gold}
          alt="gold__icon"
          className="promo__insta-img"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="3000"
          data-aos-easing="ease-in-back"
        ></img>
        <img
          src={iPhone_mockup}
          alt="phone_hand"
          className="promo__main-img"
          data-aos="fade-up"
          data-aos-delay="120"
          data-aos-duration="2000"
          data-aos-easing="ease-in-back"
        />
        <img
          src={insta_gold}
          alt="blur_icon"
          className="promo__blur-img"
          data-aos="fade-up"
          data-aos-delay="120"
          data-aos-duration="4000"
          data-aos-easing="ease-in-back"
        />
      </MediaQuery>
    </section>
  );
}

export default Promo;
