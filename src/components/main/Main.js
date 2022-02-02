import React from "react";
import Promo from "../promo/Promo";
import Examples from "../examples/Examples";
import Blogers from "../blogers/Blogers";
import Work from "../work/Work";
import About from "../about/About";
import Offer from "../offer/Offer";

function Main() {
  return (
    <main className="main section">
      <Promo />
      <Examples />
      <Blogers/>
      <Work />
      <About />
      <Offer />
    </main>
  );
}

export default Main;
