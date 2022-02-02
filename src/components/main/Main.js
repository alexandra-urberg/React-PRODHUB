import React from "react";
import Examples from "../examples/Examples";
import Work from "../work/Work";
import About from "../about/About";
import Offer from "../offer/Offer";

function Main() {
  return (
    <main className="main section">
      <Examples />
      <Work />
      <About />
      <Offer />
    </main>
  );
}

export default Main;
