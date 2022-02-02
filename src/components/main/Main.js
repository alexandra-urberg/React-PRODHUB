import React from "react";
import Examples from "../examples/Examples";
import Blogers from "../blogers/Blogers";
import Work from "../work/Work";
import About from "../about/About";
import Offer from "../offer/Offer";

function Main() {
  return (
    <main className="main section">
      <Examples />
      <Blogers />
      <Work />
      <About />
      <Offer />
    </main>
  );
}

export default Main;
