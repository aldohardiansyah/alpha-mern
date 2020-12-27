import React from "react";
import { AppLogo } from "../../../assets";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-app">
        <img src={AppLogo} className="app-logo" alt="appLogo"></img>
      </div>
      <p className="menu-item">Logout</p>
    </div>
  );
};

export default Header;
