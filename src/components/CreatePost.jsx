import React, { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

function CreatePost() {
  const {addPost}=useContext(PostList)

  const userIdElement =useRef()
  const postTitleElement =useRef()
  const bodyElement =useRef()
  const reactionsElement =useRef()
  const tagElement =useRef()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const userId=userIdElement.current.value
    const postTitle=postTitleElement.current.value
    const postBody=bodyElement.current.value
    const reactions=reactionsElement.current.value
    const tags=tagElement.current.value.split(" ")
    addPost(userId, postTitle, postBody, reactions,tags)
  }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          UserId
        </label>
        <input
        ref={userIdElement}
          type="text"
          placeholder="your user id."
          className="form-control"
          id="userId"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
        ref={postTitleElement}
          type="text"
          placeholder="how are you feeling today..."
          className="form-control"
          id="title"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
        ref={bodyElement}
          type="text"
          row="4"
          placeholder="Tell us more about it."
          className="form-control"
          id="body"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="raactions" className="form-label">
          No of Reactions
        </label>
        <input
        ref={reactionsElement}
          type="text"
          placeholder="How many people reacted to this post."
          className="form-control"
          id="reactions"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tags
        </label>
        <input
        ref={tagElement}
          type="text"
          placeholder="enter your hastag here by spacing."
          className="form-control"
          id="tag"
        /> 
      </div>
      
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
