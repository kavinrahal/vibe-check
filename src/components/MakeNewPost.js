import './styles/MakeNewPost.css';
import SideBar from "./SideBar";
import LogOut from "./LogOutButton";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";


export default function MakeNewPost(){
    var userPosts = [];
    const [post, setPost] = useState("");
    const history = useHistory();


    const email = sessionStorage.getItem("email");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(email);
    const userDetails = JSON.parse(retrievedObject);
    userPosts = userDetails.posts;

    const uploadPost = () => {
        userPosts.push(post);

        const customer1 = {
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            posts: userPosts,
            joinDate: userDetails.joinDate
        };

        localStorage.setItem(email, JSON.stringify(customer1));
        alert("Post uploaded successfully!");
        history.push({
            pathname: '/dash',
        });

        
    }

    return(
        <div className = "pageWrapper">
            <SideBar/>
            <div className = "content">
                <div className = "dashTop">
                    <div className = "dashHead">Make New Post</div>
                    <LogOut/>
                </div>
                <div className = "newPostQuote">Let the world know what your vibes are like today!</div>
                <div className = "signUpForm">
                        <textarea className = "formInput postText" onChange = {(e) => setPost(e.target.value)}></textarea>
                        <button className = "signUpButton signUp signUpHover" onClick={() => uploadPost()}>Check my Vibe!</button>
                </div>
            </div>
        </div>
    );
}