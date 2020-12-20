import React from "react";
import "./button.scss";

const Button = ({ label, ...rest }) => {
  return (
    <div className="button-wrapper">
      <button className="button" {...rest}>
        {label}
      </button>
    </div>
  );
};

export default Button;
