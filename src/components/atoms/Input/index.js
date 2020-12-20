import React from "react";
import "./input.scss";

const Input = ({ label, type, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="label">{label}</p>
      <input className="input" type={type} {...rest} />
    </div>
  );
};

export default Input;
