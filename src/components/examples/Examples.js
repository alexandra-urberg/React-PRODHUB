import React from "react";
import MediaQuery from "react-responsive";
import millioner from "../../images/Image-5.png";
import success from "../../images/Image-6.png";
import marathon from "../../images/Image-7.png";
import info from "../../images/info.svg";

function Examples() {
  return (
    <section className="examples" id="examples">
      <h2 className="title mb">
        Помогаем блогерам продавать на
        <span className="gold-font"> миллионы</span>
      </h2>
      <>
        <MediaQuery minWidth={701}>
          <ul className="examples__container">
            <li className="examples__box mb">
              <img
                className="examples__img"
                src={millioner}
                alt="advertising"
              />
              <p className="description grid">
                Вы наверняка множество раз наблюдали, как блогеры продают
                марафоны, курсы и прочее, зарабатывая миллионы
              </p>
            </li>
            <li className="examples__box mb">
              <img className="examples__img" src={success} alt="advertising" />
              <p className="description grid exaples__ta">
                Наш многолетний практический опыт и ваша аудитория — дадут новые
                результаты. Мы совместно запустим курс в продажу на вашу
                аудиторию и поделим прибыль. Все вложения и затраты берем на
                себя
              </p>
            </li>
            <li className="examples__box">
              <img className="examples__img" src={marathon} alt="advertising" />
              <p className="description grid">
                Блогеры, с которыми мы сотрудничали уже заработали{" "}
                <span className="bold">от 100 000 до 7 000 000 </span> чистой
                прибыли <span className="bold">за 30 дней</span>
              </p>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxWidth={700}>
          <div className="examples__container">
            <p className="description mb">
              Вы наверняка множество раз наблюдали, как блогеры продают
              марафоны, курсы и прочее, зарабатывая миллионы
            </p>
            <img
              className="examples__img mbl"
              src={millioner}
              alt="advertising"
            />
            <img
              className="examples__img mbl"
              src={success}
              alt="advertising"
            />
            <img
              className="examples__img mb"
              src={marathon}
              alt="advertising"
            />
            <p className="description mb">
              Наш многолетний практический опыт и ваша аудитория — дадут новые
              результаты. Мы совместно запустим курс в продажу на вашу аудиторию
              и поделим прибыль. Все вложения и затраты берем на себя
            </p>
            <div className="border">
              <div className="description__box">
                <img className="discription__img" src={info} alt="logo" />
                <p className="description">
                  Блогеры, с которыми мы сотрудничали уже заработали
                  <span className="bold">
                    {" "}
                    от 100 000 до 7&nbsp;000 000{" "}
                  </span>{" "}
                  чистой прибыли <span className="bold">за 30 дней</span>
                </p>
              </div>
            </div>
          </div>
        </MediaQuery>
      </>
    </section>
  );
}

export default Examples;
