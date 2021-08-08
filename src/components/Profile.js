import SideBar from "./SideBar"
import './styles/Profile.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import LogOut from "./LogOutButton";

export default function Profile(){
    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const history = useHistory();
    var userPosts = [];

    const email = sessionStorage.getItem("email");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(email);
    const userDetails = JSON.parse(retrievedObject);
    // Retrieve user password
    const userPassword = userDetails.password;
    userPosts = userDetails.posts;

    const deleteAccount = () => {
        localStorage.removeItem(email);
        // redirect 
        history.push({
            pathname: '/',
        });
    }

    const changeDetails = () => {

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
                    <LogOut/>
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

                    <button className = "submitChange" onClick={() => changeDetails()}>Submit Changes</button>
                </div>

                <div className = "profileQuote">If you would like to terminate your account, click the button below.</div>
                <div className = "bottomRow">
                    <button 
                        onClick={() => {
                            const confirmBox = window.confirm(
                            "Are you sure you want to Delete your Account? This Action is not reversible."
                            )
                            if (confirmBox === true) {
                                deleteAccount();
                            }
                        }}
                    className = "deleteAccount signOutHover">Delete Account</button>
                </div>
                <br></br>
            </div>
        </div>
    );
}