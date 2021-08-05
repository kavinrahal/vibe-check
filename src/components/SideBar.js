import './styles/SideBar.css';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import home from './addons/home.svg';
import profile from './addons/profile.svg';
import newPost from './addons/newPost.svg';
import feed from './addons/feed.svg';


export default function SideBar(){
    return(
        <div className = "sideBarWrapper">
            <div className = "slogan">
                <div className = "sloganTitle">Vibe Check</div>
            </div>
            <div className = "navigation">
                <Link to = "/dash" className = "nav hvr-sweep-to-bottom"><div className = "navItem"><img src = {home} className = "navLogo"></img>Home</div></Link>
                <Link to = "/profile" className = "nav hvr-sweep-to-bottom"><div className = "navItem"><img src = {profile} className = "navLogo"></img>Profile</div></Link>
                <Link to = "/make" className = "nav hvr-sweep-to-bottom"><div className = "navItem"><img src = {newPost} className = "navLogo"></img>Make New Post</div></Link>
                <Link to = "/view" className = "nav hvr-sweep-to-bottom"><div className = "navItem"><img src = {feed} className = "navLogo"></img>View My Posts</div></Link>
            </div>
        </div>
    );
}