import React, { useEffect } from "react";
import { Home } from "../components/Landing";
import { useLocation } from "react-router-dom";

const Landing = () => {
  let location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    // Check if there is a hash and if an element with that id exists
    const el = hash && document.getElementById(hash.substr(1));
    console.log(el, hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);
  return (
    <>
      <Home />
      <div id="about">
        <p></p>
      </div>

      <div id="contact">
        <p></p>
      </div>
    </>
  );
};

export default Landing;
