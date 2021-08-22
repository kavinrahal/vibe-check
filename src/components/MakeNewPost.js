import './styles/MakeNewPost.css';
import SideBar from "./SideBar";
import LogOut from "./LogOutButton";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import imageToBase64 from 'image-to-base64/browser';


export default function MakeNewPost(){
    var userPosts = [];
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [textPost, setTextPost] = useState("");
    var postImg;
    const history = useHistory();


    const email = sessionStorage.getItem("email");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(email);
    const userDetails = JSON.parse(retrievedObject);
    userPosts = userDetails.posts;

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
        console.log(selectedFile);
    }

    const uploadPost = () => {
        const imgUrl = URL.createObjectURL(selectedFile);
        if(textPost != ""){
            imageToBase64(imgUrl) // Path to the image
            .then(
                (response) => {
                    postImg = response;
                    userPosts.push({text: textPost, img: postImg});

                    const customer1 = {
                        avatar:userDetails.avatar,
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
            )
            .catch(
                (error) => {
                    console.log(error); // Logs an error if there was one
                }
            )

            
        }

        else{
            alert("Post cannot be empty!")
        }

        
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
                <div className = "newPostForm">
                        <textarea className = "formInput postText" onChange = {(e) => setTextPost(e.target.value)}></textarea>
                            <div className = "formLabel">Upload Image</div>
                            {selectedFile &&  <img className = "preview" src={preview} />}
                            <input type='file' onChange={onSelectFile}/>

                        <button className = "signUpButton signUp signUpHover" onClick={() => uploadPost()}>Check my Vibe!</button>
                </div>
                
            </div>
        </div>
    );
}