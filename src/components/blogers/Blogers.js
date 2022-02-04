import React from "react";
import blogerInfo from "../../utils/blogersInformation";
import info from "../../images/info.svg";
import Card from "../card/Card";
import Buttons from "../buttons/Buttons";

function Blogers() {
  return (
    <section className="blogers" id="blogers">
      <h2 className="title blogers_mg">
        Наши предыдущие <span className="gold">запуски с блогерами</span>
      </h2>
      <p className="description blogers_mg_l">
        Все отзывы и цифры настоящие, могут быть подтверждены любыми способами{" "}
      </p>
      <div className="border">
        <div className="blogers__box blogers__padding">
          <img className="bloggers__img" src={info} alt="info_icon" />
          <p className="blogers__description">
            Мы работаем с блогерами минимально{" "}
            <span className="bold">от 15 000 подписчиков</span>
          </p>
        </div>
      </div>
      <ul className="blogers__list">
        {blogerInfo.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              video={card.video}
              image={card.image}
              name={card.name}
              insagram={card.insagram}
              insta_link={card.insta_link}
              bussines={card.bussines}
              subscribers={card.subscribers}
              stories={card.stories}
              salary_before={card.salary_before}
              salary_after={card.salary_after}
            />
          );
        })}
      </ul>
      <div className="bloger__offer">
        <h2 className="title offer__margin">
          У вас есть инстаграм и вы хотите также?
        </h2>
        <p className="description text offer__margin_b">
          Напишите прямо сейчас
        </p>
        <Buttons />
      </div>
    </section>
  );
}

export default Blogers;
