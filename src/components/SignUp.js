import './styles/SignUp.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import signUpPic from './addons/signUpPic.png';
import Footer from './Footer';

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState(new Map);
    const history = useHistory();

    const joinDate = (new Date()).toString().split(' ').splice(1,3).join(' ');

    const validate = () => {
        let retVal = true
        // Checking for empty form values
        let fieldsName = ['name', 'email', 'password', 'confirmPassword']
        let fields = [name, email, password, confirmPassword]
        let error_sections = new Map()


        for (let k = 0; k < fields.length; k++) {
            if (fields[k] == "") {
                error_sections.set(fieldsName[k], "All Fields must be Required!")
                retVal = false
            }
        }

        // Check for Password Mismatch
        if (password != "" && confirmPassword != "" && password != confirmPassword) {
            error_sections.set('formError', "Password Mismatch!")
            retVal = false
        }

        // Check for email format
        const emailRegex = /\S+@\S+\.\S+/;
        if (email != "" && !emailRegex.test(email)) {
            error_sections.set('email', "Email must be in right format'")
            retVal = false
        }

        setErrors(error_sections)
        return retVal
    }

    const handleSubmit = async (e) => {
        if(validate()){
            const customer1 = {
                name: name,
                email: email,
                password: password,
                posts: [],
                joinDate: joinDate
            };

            // Put the object into storage
            localStorage.setItem(email, JSON.stringify(customer1));
            alert("You have succesfully registered to Vibe Check!");

            // Reset data
            setName("");
            setEmail("");
            setPassword("");

            // Redirect to Login page
            history.push({
                pathname: '/signIn',
            });
        }
    }

    return(
        <div className = "landingWrapper">
            <div className = "dashTop">
                <Link to = "/" style={{ textDecoration: 'none', color: 'white' }} className = "dashHead">Vibe Check</Link>
                <div className = "landingBtns">
                    <Link to = "/signIn" style={{ textDecoration: 'none' }} className = "signIn">Sign In</Link>
                </div>
            </div>

            <div className = "signUpContent">
                <div className = "signUpSection">
                    <div className = "signUpQuote">Sign Up to have your vibes lifted!</div>
                    <div className = "signUpForm">
                        <div className = "formElement">
                            <div className = "formLabel">Name</div>
                            <input className = "formInput" type = "text" placeholder = " Name" value={name}
                            onChange={(e) => setName(e.target.value)} required></input>
                        </div>
                        <span className="errorMessage"> {errors.get("name")} </span>

                        <div className = "formElement">
                                <div className = "formLabel">Email</div>
                                <input className = "formInput" type = "email" placeholder = " Email" value = {email}
                                onChange = {(e) => setEmail(e.target.value)} required></input>
                        </div>
                        <span className="errorMessage"> {errors.get("email")} </span>

                        <div className = "formElement">
                                <div className = "formLabel">Password</div>
                                <input className = "formInput" type = "password" placeholder = " Password" value = {password}
                                onChange = {(e) => setPassword(e.target.value)} required></input>
                        </div>
                        <span className="errorMessage"> {errors.get("password")} </span>

                        <div className = "formElement">
                                <div className = "formLabel">Confirm Password</div>
                                <input className = "formInput" type = "password" placeholder = " Confirm Password" value = {confirmPassword}
                                onChange = {(e) => setConfirmPassword(e.target.value)} required></input>
                        </div>
                        <span className="errorMessage"> {errors.get("confirmPassword")} </span>

                        <button className = "signUpButton signUp signUpHover" onClick={() => handleSubmit()}>Sign Me Up!</button>
                        <span className="errorMessage"> {errors.get("formError")} </span>
                    </div>
                </div>
                <img className = "signUpImg" src = {signUpPic}></img>
            </div>

            <Footer/>  
        </div>
    );
}