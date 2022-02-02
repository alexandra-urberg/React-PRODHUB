import React from "react";
/**import blogerInfo from '../../utils/blogersInformation';**/
import info from "../../images/info.svg";

function Blogers() {
    return(
        <section className="blogers">
            <h2 className="title blogers_mg">Наши предыдущие <span className="gold">запуски с блогерами</span></h2>
            <p className="description blogers_mg_l">Все отзывы и цифры настоящие, могут быть подтверждены любыми способами </p>
            <div className="border">
                <div className="blogers__box blogers__padding">
                    <img className="bloggers__img" src={info} alt="info_icon"/>
                    <p className="blogers__description">Мы работаем с блогерами минимально <span className="bold">от 15 000 подписчиков</span></p>
                </div>
            </div>
        </section>
    )
}

export default Blogers;