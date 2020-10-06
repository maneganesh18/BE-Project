import React from "react";
import './forget.css'

const Forget = () => {
  return (
    <div className="wrapper">
    <h1 className="forheading">Forgot Password</h1>
    <form >
        <input type="text" name="email" placeholder=" Email" />
        <button type="button" className="btn1 mt-3 mb-5" >Send OTP</button>
    </form>
</div>
  );
};

export default Forget;
