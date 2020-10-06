import React from "react";

import "./login.css";

import google from "./assest/google.png";

const Login = () => {
  return (
    <div className=" form-wrap">
      <form>
        <h1 className="pb-4">Log-in to your account</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="button" value="Log In" />
        <a className="forget mb-5" href="/forget">
          Forgot Password
        </a>
        <p>
          Don't have an account?<a href="/register">Register here</a>
        </p>
       
      </form>
      <img className="googlelog" src={google} alt=""/>
    </div>
  );
};

export default Login;
