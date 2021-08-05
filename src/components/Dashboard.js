import './styles/Dashboard.css';
import React, { Component } from 'react';
import SideBar from './SideBar';
import logOut from './addons/logout.svg';

export default function Dashboard(){
    return(
        <div className = "pageWrapper">
            <SideBar className = "sideBar"/>
            <div className = "content">
                <div className = "dashTop">
                    <div className = "dashHead">Welcome Back, Username</div>
                    <button className = "signOut signOutHover"><img className = "navLogo" src = {logOut}></img>Sign Out</button>
                </div>
            </div>
        </div>
    );
}