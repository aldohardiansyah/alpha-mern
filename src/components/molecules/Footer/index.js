import React from "react";
import { AppFullLogoInvert } from "../../../assets";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="logo-wrapper">
        <img src={AppFullLogoInvert} alt="footerLogo"></img>
      </div>
      <div className="social-wrapper">
        <p className="menu-item">Home</p>
        <p className="menu-item">About</p>
        <p className="menu-item">News</p>
      </div>
    </div>
  );
};

export default Footer;
