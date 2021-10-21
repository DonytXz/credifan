import React from "react";
import Hero from "../../assets/img/figure1.png";
import Logo from "../../assets/img/logoOnly.png";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row ">
        <div>
          <img className="mx-auto" src={Hero} alt="" srcSet="" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-xl font-bold text-blue-regular">hola casa!</h1>
          <img className="mx-auto" src={Logo} alt="" srcSet="" />
          <span className="text-center uppercase text-lg text-blue-regular">transforma tu vida</span>
          <p className="w-10/12 mx-auto text-blue-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nobis recusandae perspiciatis dolorem fugiat cum commodi!
          </p>
          <button className="w-3/4 mx-auto uppercase p-6 bg-blue-light text-white">cotiza ahora!</button>
        </div>
      </div>
    </>
  );
};

export default Home;
