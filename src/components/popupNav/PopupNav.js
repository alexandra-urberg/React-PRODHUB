import React from "react";
import Navigation from "../navigation/Navigation";
import Icons from "../icons/Icons";

function PopupNav() {
    return(
        <div className="popupNav">
            <div className="popupNav__container section">
            <div className="popupNav__box">
                <h2 className="popupNav__title">Меню</h2>
                <button className="popupNav__btn"></button>
            </div>
            <div className="popupNav__main">
            <Navigation />
            </div>
            <div className="popupNav__margin">
            <Icons/>
            </div>
            </div>
        </div>
    )
}

export default PopupNav;