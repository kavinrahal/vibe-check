import SideBar from "./SideBar"
import logOut from './addons/logout.svg';
import './styles/Profile.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

export default function Profile(){
    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [errors, setErrors] = useState(new Map);
    const history = useHistory();
    var userPosts = [];

    const email = sessionStorage.getItem("email");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(email);
    const userDetails = JSON.parse(retrievedObject);
    // Retrieve user password
    const userPassword = userDetails.password;
    userPosts = userDetails.posts;

    const validate = () => {
        let retVal = true
        let fieldsName = ['name', 'password']
        let fields = [name, password]
        let error_sections = new Map()
    
        for (let k = 0; k < fields.length; k++) {
          if (fields[k] == "") {
            error_sections.set(fieldsName[k], "Cannot change to Empty")
            console.log(fieldsName[k])
            retVal = false
          }
        }
        setErrors(error_sections);
        return retVal;
    }

    const onClick = () => {

            if(newPassword === ""){
                setNewPassword(userPassword);
            }

            if(newName === ""){
                setNewName(sessionStorage.getItem("name"));
            }


            if(newPassword != "" && newName != ""){
                const customer1 = {
                    name: newName,
                    email: email,
                    password: newPassword,
                    posts: userPosts,
                    joinDate: sessionStorage.getItem("joinDate")
                };
        
                // Put the object into storage
                localStorage.setItem(email, JSON.stringify(customer1));
                alert("You have changed your details successfully!");
                sessionStorage.setItem("name", newName);
            }
            
            
    }

    return(
        <div className = "pageWrapper">
            <SideBar/>
            <div className = "content">
                <div className = "dashTop">
                    <div className = "dashHead">Profile</div>
                    <button className = "signOut signOutHover"><img className = "navLogo" src = {logOut}></img>Sign Out</button>
                </div>
                <div className = "profileDetails">
                    <input type = "file" className = "avatar"></input>
                    <div className = "formLabel">{sessionStorage.getItem("name")}</div>
                    <div className = "formLabel">{sessionStorage.getItem("email")}</div>
                    <div className = "formLabel">Joined Date: {sessionStorage.getItem("joinDate")}</div>
                </div>
                <div className="profileQuote">You can check and change any of your details here!</div>
                <div className = "profile">
                    <div className = "nameChange">
                        <div className = "formLabel">Change Name</div>
                        <input className = "formInput" type = "text" placeholder = " Change Name" 
                        onChange = {(e) => setNewName(e.target.value)}></input>
                    </div>

                    <div className = "passwordChange">
                        <div className = "formLabel">Change Password</div>
                        <input className = "formInput" type = "password" placeholder = " Change Password" 
                        onChange = {(e) => setNewPassword(e.target.value)}></input>
                    </div>

                    <button className = "submitChange" onClick={() => onClick()}>Submit Changes</button>
                </div>

                <div className = "profileQuote">If you would like to terminate your account, click the button below.</div>
                <div className = "bottomRow">
                    <button 
                        onClick={() => {
                            const confirmBox = window.confirm(
                            "Are you sure you want to Delete your Account? This Action is not reversible."
                            )
                            if (confirmBox === true) {
                            // onClick();
                            }
                        }}
                    className = "deleteAccount signOutHover">Delete Account</button>
                </div>
                <br></br>
            </div>
        </div>
    );
}