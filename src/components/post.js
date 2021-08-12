import { useState } from "react";
import { Link } from "react-router-dom";
import LikeList from "../containers/likelist";
import EditPost from "../form/editpost";
import LikeButton from "./like-button";
import ModifyPost from "./modify-post";

const Post = ({ post, user, setPosts, usersObject }) => {
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
      <LikeButton post={post} setPosts={setPosts} userId={user.id} />
      <LikeList postLikes={post.user_likes_id} usersObject={usersObject} />
      {post.user.id === user.id && (
        <ModifyPost post={post} setPosts={setPosts} setIsEdit={setIsEdit} />
      )}
      <hr />
    </>
  );
};
export default Post;
