import './styles/Dashboard.css';
import React, { Component } from 'react';
import SideBar from './SideBar';
import logOut from './addons/logout.svg';
import LogOut from "./LogOutButton";

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
                    <LogOut/>
                </div>
            </div>
        </div>
    );
}