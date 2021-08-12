import axios from "axios";
import { FaThumbsUp } from "react-icons/fa";

const LikeButton = ({ post, userId, setPosts }) => {
  let postId = post.id;
  let updatePost = (posts, req) =>
    posts.map((post) =>
      post.id === postId ? { ...req.data, user: post.user } : post
    );
  let like = async () => {
    let req = await axios.patch(`http://localhost:8000/posts/${postId}`, {
      likes: post.likes + 1,
      user_likes_id: [...post.user_likes_id, userId],
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((posts) => updatePost(posts, req));
  };
  let unlike = async () => {
    let req = await axios.patch(`http://localhost:8000/posts/${postId}`, {
      likes: post.likes - 1,
      user_likes_id: post.user_likes_id.filter((user) => userId !== user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((posts) => updatePost(posts, req));
  };
  return (
    <button
      onClick={() => (post.user_likes_id.includes(userId) ? unlike() : like())}
    >
      <FaThumbsUp />
    </button>
  );
};

export default LikeButton;
