import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="bgImage"></img>
      </div>
      <div className="right">
        <p className="title-text">Register</p>
        <Input label="Fullname" type="text" placeholder="Fullname" />
        <Gap height={16} />
        <Input label="Email" type="email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" type="password" placeholder="Password" />
        <Gap height={30} />
        <Button label="Register" />
        <Gap height={30} />
        <Link title="Back to Login" />
      </div>
    </div>
  );
}

export default Register;
