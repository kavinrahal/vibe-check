import SideBar from "./SideBar"
import logOut from './addons/logout.svg';
import './styles/Profile.css';

export default function Profile(){
    return(
        <div className = "pageWrapper">
            <SideBar/>
            <div className = "content">
                <div className = "dashTop">
                    <div className = "dashHead">Profile</div>
                    <button className = "signOut signOutHover"><img className = "navLogo" src = {logOut}></img>Sign Out</button>
                </div>
                <div className="profileQuote">You can check and change any of your details here!</div>
                <div className = "profile">
                    <div className = "nameChange">
                        <div className = "formLabel">Change Name</div>
                        <input className = "formInput" type = "text" placeholder = " Change Name"></input>
                    </div>

                    <div className = "emailChange">
                        <div className = "formLabel">Change Email</div>
                        <input className = "formInput" type = "text" placeholder = " Change Email"></input>
                    </div>

                    <div className = "passwordChange">
                        <div className = "formLabel">Change Password</div>
                        <input className = "formInput" type = "text" placeholder = " Change Password"></input>
                    </div>

                    <button className = "submitChange">Submit Changes</button>
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
            </div>
        </div>
    );
}