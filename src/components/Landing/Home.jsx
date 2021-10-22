import React from "react";
import Hero from "../../assets/img/figure1.png";
import Logo from "../../assets/img/logoOnly.png";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row w-10/12 mx-auto">
        <div>
          <img className="mx-auto" src={Hero} alt="" srcSet="" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col md:flex-row mx-auto">
            <h1 className="text-center text-4xl font-bold text-blue-regular mr-6">
              hola casa!
            </h1>
            <img className="" src={Logo} alt="" srcSet="" />
          </div>

          <span className="text-center uppercase text-2xl text-blue-regular">
            transforma tu vida
          </span>
          <p className="w-10/12 mx-auto text-lg text-blue-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nobis recusandae perspiciatis dolorem fugiat cum commodi!
          </p>
          <button className="w-3/4 mx-auto uppercase p-6 bg-blue-light text-white">
            cotiza ahora!
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
