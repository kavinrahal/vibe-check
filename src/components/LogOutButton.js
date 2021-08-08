import logOut from './addons/logout.svg';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function LogOut(){
    const logOutFunction = () => {
        sessionStorage.clear();
    }
    return(
        <div>
        <Link to = "/" style={{ textDecoration: 'none'}} className = "signOut signOutHover"  onClick = {() => logOutFunction()}><img className = "navLogo" src = {logOut}></img>Sign Out</Link>
        </div>
    );
}