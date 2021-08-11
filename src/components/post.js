import { Link } from "react-router-dom";
import ModifyPost from "./modify-post";

const Post = ({ post, user, setPosts }) => {
  return (
    <>
      <img
        src={post.user.profilePicture}
        alt="profile of user"
        width={70}
        height={80}
      />
      <p>
        <Link to={`user/${post.user.id}`}> User: {post.user.username} </Link>{" "}
      </p>
      <h5>Content: {post.content}</h5>{" "}
      {post.user.id === user.id && (
        <ModifyPost post={post} setPosts={setPosts} />
      )}
      <hr />
    </>
  );
};
export default Post;
