import './styles/Dashboard.css';
import React, { useState, useEffect } from "react";
import SideBar from './SideBar';
import LogOut from "./LogOutButton";
import PostElement from './PostElement';

export default function Dashboard(){
    var userPosts = [];
    
    const email = sessionStorage.getItem("email");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(email);
    const userDetails = JSON.parse(retrievedObject);
    userPosts = userDetails.posts;

    return(
        <div className = "pageWrapper">
            <SideBar className = "sideBar"/>
            <div className = "content">
                <div className = "dashTop">
                    <div className = "dashHead">Welcome Back, {sessionStorage.getItem("name")}</div>
                    <LogOut/>
                </div>

                <div className = "postSection">
                    <div className = "feedQuote">Your feed</div>
                     { userPosts.length > 0 ?
                         userPosts.map((post) => (
                             <PostElement element={post} />))
                         : <div className='noPosts' >
                                <div>No Posts</div>
                                <br></br>
                                <div>Click on the "Make a New Post" tab on the Navigation Bar
                                    to make your first post!</div>
                         </div>
                    }
                </div>
            </div>
        </div>
    );
}