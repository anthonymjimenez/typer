import axios from "axios";
import { useState } from "react";

const EditPost = ({ postId, postContent, setPosts, setIsEdit }) => {
  let [editPost, setEdit] = useState(postContent);
  let update = async () => {
    console.log(postId);
    let req = await axios.patch(`http://localhost:8000/posts/${postId}`, {
      content: editPost,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...req.data, user: post.user } : post
      )
    );
    setIsEdit((edit) => !edit);
  };

  return (
    <>
      <textarea
        type="text-area"
        value={editPost}
        onChange={(e) => setEdit(e.target.value)}
      />
      <button onClick={update}> Edit </button>
    </>
  );
};

export default EditPost;
