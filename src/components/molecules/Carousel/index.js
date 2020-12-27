import React from "react";
import "./carousel.scss";
import { LoginBg } from "../../../assets";

const Carousel = ({ label }) => {
  return (
    <div className="carousel-wrapper">
      <img src={LoginBg} className="carousel-image" alt="bgImage"></img>

      {/* {label ===
        "homePage"(
          <img src={LoginBg} className="bg-image" alt="bgImage"></img>
        )}
      {label ===
        "aboutPage"(
          <img src={RegisterBg} className="bg-image" alt="bgImage"></img>
        )} */}
    </div>
  );
};

export default Carousel;
