import React, { useState } from "react";
import { MobileMenu, Menu } from "../Global";
import BrandLogo from "../../assets/img/logoBrand.png";
import HamburgerMenu from "../../assets/img/icons/hamburgerMenu.svg";

const Header = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="p-2">
          <img src={BrandLogo} alt="" srcSet="" />
        </div>
        <img
          className="block lg:hidden p-6"
          src={HamburgerMenu}
          alt=""
          srcSet=""
          onClick={() => setMenuFlag(!menuFlag)}
        />
        <Menu isLanding={true} />
      </div>
      <MobileMenu
        isLanding={true}
        menuFlag={menuFlag}
      />
    </>
  );
};

export default Header;
