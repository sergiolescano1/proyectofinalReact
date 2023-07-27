import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import imagenNav from "./imagenesNavBar/laptop.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar has-background-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to={"/"}>
            <img src={imagenNav} alt="Logo" style={{ width: "50px", height: "33px" }} />
          </Link>
        </div>
        <div className="navbar-item">
          <div className="buttons">
            <Link to={"/categoria/notebook"} className="button is-link">Notebooks</Link>
            <Link to={"/categoria/macbook"} className="button is-link">Macbooks</Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

