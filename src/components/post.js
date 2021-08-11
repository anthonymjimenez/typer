import { useState } from "react";
import { Link } from "react-router-dom";
import EditPost from "../form/editpost";
import ModifyPost from "./modify-post";

const Post = ({ post, user, setPosts }) => {
  let [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {console.log(post)}
      <img
        src={post.user.profilePicture}
        alt="profile of user"
        width={70}
        height={80}
      />
      <p>
        <Link to={`user/${post.user.id}`}> User: {post.user.username} </Link>{" "}
      </p>
      {!isEdit ? (
        <h5>Content: {post.content}</h5>
      ) : (
        <EditPost
          postId={post.id}
          postContent={post.content}
          setPosts={setPosts}
          setIsEdit={setIsEdit}
        />
      )}
      {post.user.id === user.id && (
        <ModifyPost post={post} setPosts={setPosts} setIsEdit={setIsEdit} />
      )}
      <hr />
    </>
  );
};
export default Post;
