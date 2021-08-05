import './styles/Landing.css';
import landingPic from './addons/landingPic.png';
import Footer from './Footer';

export default function Landing(){
    return(
        <div className = "landingWrapper">
            <div className = "dashTop">
                <div className = "landingHead">Vibe Check</div>
                <div className = "landingBtns">
                    <button className = "signIn">Sign In</button>
                    <button className = "signUp signUpHover">Sign Up</button>
                </div>
            </div>
            <div className = "landingContent">
                <div className = "landingMainQuote">Some weird shit about a vibe check</div>
                <img className = "landingImg" src = {landingPic}></img>
            </div>
            <div className = "landingAbout">
                <div className = "landingQuote">So, What are we?</div>
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