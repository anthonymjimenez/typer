import { useState } from "react";
import { uid } from "uid";
import moment from "moment";
import axios from "axios";
const NewPosts = ({ user, setPosts }) => {
  let [post, setPost] = useState("");

  const createPost = () => {
    axios
      .post("http://localhost:8000/posts", {
        id: uid(),
        content: post,
        likes: 0,
        user_likes_id: [],
        user_id: user.id,
        created_at: moment().format("YYYY/MM/D hh:mm:ss SSS"),
        last_edited: null,
      })
      .then((post) =>
        // setPosts(posts => {
        //     console.log(posts)
        //     return posts;
        //     return [{...post.data, user: usersObject[post.data.user_id]}, ...posts ]
        setPosts((posts) => [{ ...post.data, user: user }, ...posts])
      )
      .then(console.log);
  };

  return (
    <>
      {/* <h6>Hey {user.username}, what's on your mind?</h6>
       */}
      <textarea
        type="text-area"
        placeholder="Enter new post!"
        onChange={(e) => setPost(e.target.value)}
      />
      <button onClick={createPost}> Create! </button>
      <br></br>
      <hr></hr>
    </>
  );
};

export default NewPosts;
