import React from "react";
import Hero from "../../assets/img/figure1.svg";

const About = () => {
  return (
    <>
      <div
        id="about"
        class="w-full 2xl:w-10/12   lg:h-screen mx-auto flex flex-col lg:flex-row"
      >
        <div class="lg:h-1/2 w-full lg:w-1/2 lg:my-auto relative z-40">
          <img
            class="my-auto relative lg:-right-24   h-full w-full"
            width="500"
            src={Hero}
            alt=""
          />
        </div>
        <div class="container z-0  lg:relative  lg:-left-12 xl:-left-18 2xl:-left-24  lg:h-2/3  w-full lg:w-1/2 lg:my-auto border-4 border-aqua py-5 lg:py-28 px-5 lg:pl-56 max-w-5xl inline-block ">
          <div class="w-full h-full flex flex-col lg:justify-center lg:content-center  lg:my-auto">
            <h1 class="font-semibold  text-white text-4xl align-middle txt-aqua">
              Credifan
            </h1>
            <span class="text-white text-xl align-middle txt-aqua">
              Especialistas en credito
            </span>
            <p class="text-white font-normal text-base mt-0 lg:mt-5 align-middle txt-aqua">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              beatae debitis dolorum sint mollitia in fugiat suscipit, odit eius
              rerum aperiam laudantium odio illum quas iste!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
