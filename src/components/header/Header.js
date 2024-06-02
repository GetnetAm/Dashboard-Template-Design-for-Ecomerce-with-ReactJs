import React from "react";
import "./Header.css";
import Logo from "../logo/Logo";
import Searchbar from "../searchbar/Searchbar";
import Nav from "../nav/Nav";
function Header() {
  return (
    // heder design
    <div id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <Searchbar />
      <Nav />
    </div>
  );
}

export default Header;
