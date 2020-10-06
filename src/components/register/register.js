import React from 'react';

import './register.css'

const Register = () => {
    return ( 
        <div className="login-box mt-5" > 
        <div className="left-box" fluid={true} action="connect.php" method="post">
            <h1 className="heading">Sign Up</h1>
            <input className="username" type="text" name="Username" placeholder="Username"/>
            <input className="mail" type="text" name="Email" placeholder="Email"/>
            <input className="phone" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone no" />
            <input className="pass" type="Password" name="Password" placeholder="Password"/>
            <input className="repass" type="Password" name="RetypePassword" placeholder="RetypePassword"/>
            <input className="submit" type="submit" name="btn" value="Sign Up"/>
        </div>
        <div className="right-box" fluid={true}>
            <div className="right-data">
                <span className="signinwith">Sign in with<br/>Social Network</span>
                <button className="socialfacebook">Login With Facebook</button>
                <button className="socialgoogle">Login With Gmail</button>
            </div>
        </div>
        <div className="or">OR</div>
    </div>
 );
}
 
export default Register;