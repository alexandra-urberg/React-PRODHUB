import React from 'react';
import '../../index.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import PopupNav from '../popupNav/PopupNav';

function App() {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Footer/>
      <PopupNav/>
    </div>
  );
}

export default App;
