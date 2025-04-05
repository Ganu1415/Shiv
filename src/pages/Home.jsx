import React, { useEffect, useState } from "react";
import Mantra from "../componentes/Mantra";
import Kavach from "../componentes/Kavach";
import Source from "../componentes/Source";
import Counter from "../componentes/Counter";

const Home = () => {

  return (
    <>
      <div className="text-2xl font-bold text-center space-y-4 mb-4">
        <Mantra />
        <Kavach />
        <Source />
        <Counter />

      </div>

    </>
  );
};

export default Home;
