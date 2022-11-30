import React, { useEffect } from "react";
import Card from "./Card";
import Planet from "./Planet";
import { Payment } from "./Payment";
const Home = () => {

  return (
    <>
      <Planet/>
      <Card/>
      <Payment/>
    </>
  );
};

export default Home;
