import React, { useEffect } from "react";
import Card from "./Card";
import Planet from "./Planet";
import Prepaid from "./Prepaid";
import Payment from "./Payment";
const Home = () => {

  return (
    <>
      <Planet />
      <Card />
      <Payment />
      <Prepaid />
    </>
  );
};

export default Home;
