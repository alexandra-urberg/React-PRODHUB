import React from "react";
import Navigation from "../navigation/Navigation";
import Icons from "../icons/Icons";

function PopupNav({onClose, isOpen}) {
    return(
        <div className={`popupNav ${isOpen ? "popupNav__open" : ""}`}>
            <div className="popupNav__container section">
            <div className="popupNav__box">
                <h2 className="popupNav__title">Меню</h2>
                <button className="popupNav__btn" onClick={onClose}></button>
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