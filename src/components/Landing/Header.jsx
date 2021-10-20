import React from "react";
import Navigation from "../Global/Navigation";
import BrandLogo from "../../assets/img/logoBrand.png";

const Header = () => {
  return (
    <>
      <img src={BrandLogo} alt="" srcSet="" />
      <Navigation isLanding={true} />
    </>
  );
};

export default Header;
