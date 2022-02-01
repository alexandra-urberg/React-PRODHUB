import React, { useState, useEffect } from "react";
import "../../index.css";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import PopupNav from "../popupNav/PopupNav";

function App() {
  const [isPopupNavOpen, setIsPopupNavOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupNavOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupNavOpen(false);
  };

  useEffect(() => {
    //обработчик закрытия попапов по нажатия на ESC и overlay
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        handleClosePopup();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  return (
    <div className="app">
      <Header onOpen={handleOpenPopup} />
      <Main />
      <Footer />
      <PopupNav onClose={handleClosePopup} isOpen={isPopupNavOpen} />
    </div>
  );
}

export default App;
