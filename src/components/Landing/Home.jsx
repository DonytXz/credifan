import React from "react";
import Hero from "../../assets/img/figure1.png";
import Logo from "../../assets/img/logoOnly.png";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <img src={Hero} alt="" srcSet="" />
      <h1>hola casa!</h1>
      <img src={Logo} alt="" srcset="" />
      <span className="uppercase">transforma tu vida</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nobis
        recusandae perspiciatis dolorem fugiat cum commodi!
      </p>
      <button className="uppercase">cotiza ahora!</button>
    </>
  );
};

export default Home;
