import React from "react";
import logo from "../assets/logos/logo.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img className="logo__img" src={logo} alt="" />
      </div>
    </header>
  );
}
