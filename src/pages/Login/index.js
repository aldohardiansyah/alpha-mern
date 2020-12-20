import React from "react";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

function Login() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="bgImage"></img>
      </div>
      <div className="right">
        <p className="title-text">Login</p>
        <Input label="Email" type="email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" type="password" placeholder="Password" />
        <Gap height={30} />
        <Button label="Login" />
        <Gap height={30} />
        <Link title="Register Account" />
      </div>
    </div>
  );
}

export default Login;
