import SideBar from "./SideBar"
import './styles/Profile.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import LogOut from "./LogOutButton";
import imageToBase64 from 'image-to-base64/browser';

export default function Profile(){
    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const history = useHistory();
    var userPosts = [];
    var avatar;
    var avatarUrl;

    const email = sessionStorage.getItem("email");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(email);
    const userDetails = JSON.parse(retrievedObject);
    // Retrieve user password
    const userPassword = userDetails.password;
    userPosts = userDetails.posts;
    var profilePicture = userDetails.avatar;
    var ppUrl = "data:image/jpeg;base64," + profilePicture;

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
    }

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

            // if(selectedFile === null){
            //     avatarUrl = sessionStorage.getItem("avatar");
            // }

            if(selectedFile != null){
                avatarUrl = URL.createObjectURL(selectedFile);
            }

            imageToBase64(avatarUrl) // Path to the image
            .then(
                (response) => {
                    if(selectedFile != null){
                        avatar = response;
                    }

                    else{
                        avatar = sessionStorage.getItem("avatar");
                    }

                    console.log(response);
                    
                    if(newPassword != "" && newName != ""){
                        const customer1 = {
                            avatar:avatar,
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
                        sessionStorage.setItem("avatar", avatar);

                        history.push({
                            pathname: '/profile',
                        });
                    }
                }
            )
            .catch(
                (error) => {
                    console.log(error); // Logs an error if there was one
                }
            )    
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
                    <img className = "preview" src = {ppUrl}/> 
                    <div className = "formLabel">{sessionStorage.getItem("name")}</div>
                    <div className = "formLabel">{sessionStorage.getItem("email")}</div>
                    <div className = "formLabel">Joined Date: {sessionStorage.getItem("joinDate")}</div>
                </div>
                <div className="profileQuote">You can check and change any of your details here!</div>
                <div className = "profile">
                    <div className = "imgChange">
                        <div className = "formLabel">Change Profile Picture</div>
                        <input type='file' onChange={onSelectFile} />
                    </div>

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