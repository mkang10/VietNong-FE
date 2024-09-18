import React from "react";
import './LoginForm.css';
import {FaUser   } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";


const LoginForm = () => {
    return (
    
     <div className="wrapper">
            <form action="">
                <div>
                <a href="/">
                <IoIosArrowRoundBack className="back-icon"></IoIosArrowRoundBack>
                </a>
                </div>
                
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="forgotpassword">Forgot Password</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link"> 
                    <p>Do not have an account? <a href="register">Register</a></p>
                     
                </div>
            </form>
           
            
        </div>
   
       
    )
}

export default LoginForm;