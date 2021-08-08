import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "./Footer";

export default function SignIn(){
    const history = useHistory(new Map);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(new Map);
    const [loginFailed, setLoginFailed] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const validate = () => {
        let retVal = true

        // Checking for empty form values
        let fieldsName = ['email', 'password']
        let fields = [email, password]
        let error_sections = new Map()
        for (let k = 0; k < fields.length; k++) {
            if (fields[k] == "") {
                error_sections.set(fieldsName[k], "All Fields Must be Required")
                retVal = false
            }
        }
        setErrors(error_sections)
        return retVal
    }

    const handleLogin = async () => {
        if(validate()){
            setIsLoggingIn(true);
            let found = false;

            // Retrieve the object from storage
            var retrievedObject = localStorage.getItem(email);
            const userDetails = JSON.parse(retrievedObject);
            // Retrieve user password
            const userPassword = userDetails.password;

            if(password == userPassword){

                //Login successful
                found = true;
                // reset fields
                setEmail("")
                setPassword("")
                setIsLoggingIn(false)
                // Set Session Variable
                sessionStorage.setItem("name", userDetails.name)
                sessionStorage.setItem("email", userDetails.email);
                sessionStorage.setItem("joinDate", userDetails.joinDate)
                sessionStorage.setItem("isLoggedIn", true)

                // redirect 
                history.push({
                    pathname: '/dash',
                });
            }

            if(!found){
                // set error message
                console.log('Login failed');
                setIsLoggingIn(false);
                setLoginFailed(true);
            }

        }

    }
    return(
        <div className = "landingWrapper">
            <div className = "dashTop">
                <Link to = "/" style={{ textDecoration: 'none', color: 'white' }} className = "dashHead">Vibe Check</Link>
                <div className = "landingBtns">
                    <Link to = "/signUp" style={{ textDecoration: 'none' }} className = "signIn">Sign Up</Link>
                </div>
            </div>

            <div className = "signUpContent">
                <div className = "signUpSection">
                    <div className = "signUpQuote">Login to Enjoy the Serotonin!</div>
                    <div className = "signUpForm">
                        <span className="errorMessage"> {errors.get("email")} </span>    
                        <div className = "formElement">
                                <div className = "formLabel">Email</div>
                                <input className = "formInput" type = "email" placeholder = " Email" 
                                value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        </div>

                        <div className = "formElement">
                                <div className = "formLabel">Password</div>
                                <input className = "formInput" type = "password" placeholder = " Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} required></input>
                        </div>
                        <span className="errorMessage"> {errors.get("password")} </span>
                        {loginFailed && <div className="errorMessage" > Login failed, Please try again. </div>}

                        <button className = "signUpButton signUp signUpHover" onClick={() => handleLogin()}>Let's Goooo!</button>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}