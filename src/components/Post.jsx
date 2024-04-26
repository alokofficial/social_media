import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";

import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
          <MdDeleteForever />
          <span className="visually-hidden">delete</span>
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key = {tag} className="badge text-bg-primary tag">{tag}</span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          {`total no of reaction on this post is ${post.reactions}`}
        </div>
      </div>
    </div>
  );
}

export default Post;
