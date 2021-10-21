import React, { useState } from "react";
import { MobileMenu, Menu } from "../Global";
import BrandLogo from "../../assets/img/logoBrand.png";

const Header = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="p-2">
          <img src={BrandLogo} alt="" srcSet="" />
        </div>
        <Menu menuFlag={menuFlag} setMenuFlag={setMenuFlag} isLanding={true} />
      </div>
      <MobileMenu isLanding={true} menuFlag={menuFlag} />
    </>
  );
};

export default Header;
