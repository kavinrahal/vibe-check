import './styles/Landing.css';
import landingPic from './addons/landingPic.png';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Landing(){
    return(
        <div className = "landingWrapper">
            <div className = "dashTop">
                <Link to = "/" style={{ textDecoration: 'none', color: 'white' }} className = "dashHead">Vibe Check</Link>
                <div className = "landingBtns">
                    <Link to = "/signIn" style={{ textDecoration: 'none' }} className = "signIn">Sign In</Link>
                    <Link to = "/signUp" style={{ textDecoration: 'none' }} className = "signUp signUpHover">Sign Up</Link>
                </div>
            </div>
            <div className = "landingContent">
                <div className = "landingMainQuote">Times haven't been easy, But your mates make it better.</div>
                <img className = "landingImg" src = {landingPic}></img>
            </div>
            <div className = "landingAbout">
                <div className = "landingQuote">So, Who are we?</div>
                <div className = "aboutDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus vehicula mi at pretium. 
                Phasellus at lacus eu metus egestas facilisis vitae at nisl. Mauris suscipit, est at molestie molestie, est justo finibus velit, 
                sit amet blandit justo lacus congue justo. 
                Aenean maximus ligula id luctus egestas. Aliquam erat volutpat. Etiam et nisi dui. Sed ultricies massa id felis iaculis maximus. 
                Aenean bibendum maximus tempor. Proin a ex vitae mauris convallis efficitur. Vivamus sit amet fermentum tellus. In et lacus suscipit, 
                euismod sapien pharetra, vulputate ex. Nunc erat velit, pharetra vel quam eget, cursus varius velit. Duis vel egestas libero. 
                Aliquam vitae tellus fermentum, condimentum felis eget, tempor nisl. Nullam sed laoreet orci. Etiam tincidunt lacinia vestibulum.
                </div>
            </div>

            <div className = "landingAbout">
                <div className = "landingQuote">How to?</div>
                <div className = "aboutDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus vehicula mi at pretium. 
                Phasellus at lacus eu metus egestas facilisis vitae at nisl. Mauris suscipit, est at molestie molestie, est justo finibus velit, 
                sit amet blandit justo lacus congue justo. 
                Aenean maximus ligula id luctus egestas. Aliquam erat volutpat. Etiam et nisi dui. Sed ultricies massa id felis iaculis maximus. 
                Aenean bibendum maximus tempor. Proin a ex vitae mauris convallis efficitur. Vivamus sit amet fermentum tellus. In et lacus suscipit, 
                euismod sapien pharetra, vulputate ex. Nunc erat velit, pharetra vel quam eget, cursus varius velit. Duis vel egestas libero. 
                Aliquam vitae tellus fermentum, condimentum felis eget, tempor nisl. Nullam sed laoreet orci. Etiam tincidunt lacinia vestibulum.
                </div>
            </div>

            <Footer/>
        </div>
    );
}