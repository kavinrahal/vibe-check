import './styles/PostElement.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const PostElement = ({ element }) => {
    var userPosts = [];
    const [showEdit, setShowEdit] = useState(false)
    const [post, setPost] = useState();
    const [textEdit, setEditText] = useState("");
    const history = useHistory();

    const email = sessionStorage.getItem("email");
    const avatar = sessionStorage.getItem("avatar");
    const name = sessionStorage.getItem("name");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(email);
    const userDetails = JSON.parse(retrievedObject);
    userPosts = userDetails.posts;
    const textPost = Object.values(element)[0];
    const imgPost = Object.values(element)[1];
    var ppUrl = "data:image/jpeg;base64," + avatar;

    function findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

    var index = findWithAttr(userPosts, "text", textPost);
    var imgUrl = "data:image/jpeg;base64," + imgPost;

    const openEdit = () => (setShowEdit(true));
    const closeEdit = () => (setShowEdit(false));
    
    const editPost = () => {

        if(textEdit != ""){
            userPosts[index].text = textEdit;

            const customer1 = {
                avatar:userDetails.avatar,
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
                avatar:userDetails.avatar,
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
                <div className = "userText">
                    <div className = "postName">{name}</div>
                    <div className = "postName">•</div>
                    <img className = "userAvatar" src = {ppUrl}/>
                </div>
                <div className = "postView">
                    <img className = "postImg" src = {imgUrl}/>
                    <div className = "postDesc"><p>{textPost}</p></div>
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
                            <textarea className = "formInput postText" onChange = {(e) => setEditText(e.target.value)}></textarea>
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