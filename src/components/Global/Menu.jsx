import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const { isLanding } = props;

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="lg:grid grid-cols-4 gap-2">
          <li>
            <Link to="/" className="uppercase">
              Home
            </Link>
          </li>
          {isLanding && (
            <>
              <li>
                <Link
                  to={{ pathname: "/", hash: "#about" }}
                  className="uppercase"
                >
                  quienes somos
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/", hash: "#contact" }}
                  className="uppercase"
                >
                  contacto
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to="/login" className="uppercase">
              Ingresa
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
