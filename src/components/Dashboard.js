import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './styles/Dashboard.css';
import React, { Component } from 'react';
import SideBar from './SideBar';
import logOut from './addons/logout.svg';

export default function Dashboard(){
    const logOutFunction = () => {
        sessionStorage.clear();
    }
    return(
        <div className = "pageWrapper">
            <SideBar className = "sideBar"/>
            <div className = "content">
                <div className = "dashTop">
                    <div className = "dashHead">Welcome Back, {sessionStorage.getItem("name")}</div>
                    <Link to = "/" style={{ textDecoration: 'none'}} className = "signOut signOutHover"  onClick = {() => logOutFunction()}><img className = "navLogo" src = {logOut}></img>Sign Out</Link>
                </div>
            </div>
        </div>
    );
}