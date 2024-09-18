import React from "react";
import './RegisterForm.css';
import {FaUser   } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

const RegisterForm = () => {
    return (
    
     <div className="wrapper">
            <form action="">
            <div>
                <a href="/">
                <IoIosArrowRoundBack className="back-icon"></IoIosArrowRoundBack>
                </a>
                </div>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon"/>
                </div>
                
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="re-enter the password" required/>
                    <FaLock className="icon"/>
                </div>

                <button type="submit">Register</button>

                <div className="register-link"> 
                    <p>have an account? <a href="login">Login</a></p>
                     
                </div>
            </form>
           
            
        </div>
   
       
    )
}

export default RegisterForm;