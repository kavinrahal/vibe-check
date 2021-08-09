import './styles/PostElement.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const PostElement = ({ element }) => {
    var userPosts = [];
    const [showEdit, setShowEdit] = useState(false)
    const [post, setPost] = useState("");
    const history = useHistory();

    const email = sessionStorage.getItem("email");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(email);
    const userDetails = JSON.parse(retrievedObject);
    userPosts = userDetails.posts;
    var index = userPosts.indexOf(element);

    const openEdit = () => (setShowEdit(true));
    const closeEdit = () => (setShowEdit(false));
    
    const editPost = () => {

        if(post != ""){
            userPosts[index] = post;

            const customer1 = {
                name: userDetails.name,
                email: userDetails.email,
                password: userDetails.password,
                posts: userPosts,
                joinDate: userDetails.joinDate
            };

            localStorage.setItem(email, JSON.stringify(customer1));
            alert("Post edited successfully!");
            history.push({
                pathname: '/dash',
            });
        }
        else{
            alert("Post Cannot be Empty!");
        }
        
        
    };

    const deletePost = () => {
        if (index > -1) {
            userPosts.splice(index, 1);
            const customer1 = {
                name: userDetails.name,
                email: userDetails.email,
                password: userDetails.password,
                posts: userPosts,
                joinDate: userDetails.joinDate
            };

            localStorage.setItem(email, JSON.stringify(customer1));
            history.push({
                pathname: '/dash',
            });

        }
    }

    return(
        <div className = "postElement">
                <div className = "postText">
                    {element}
                </div>
                <div className = "postButtons">
                    <div className = "editControls">
                        <button className = "editPost" onClick={() => openEdit()}>Edit Post</button>
                        <button className = "deletePost"
                        onClick={() => {
                            const confirmBox = window.confirm(
                            "Are you sure you want to Delete this Post?"
                            )
                            if (confirmBox === true) {
                                deletePost();
                            }
                        }}
                        >Delete Post</button>
                    </div>
                    <br></br>
                    {showEdit ? 
                        <div className = "editArea">
                            <textarea className = "formInput postText" onChange = {(e) => setPost(e.target.value)}></textarea>
                            <div className = "editControls">
                                <button className = "submitEdit" onClick = {() => editPost()} >Submit Changes</button>
                                <button className = "submitEdit" onClick = {() => closeEdit()}>Close</button>
                            </div>
                        </div> : null }
                </div>
        </div>
    );
}

export default PostElement;