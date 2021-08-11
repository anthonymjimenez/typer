import { FaTrashAlt, FaEdit } from "react-icons/fa";
import axios from "axios";
const ModifyPost = ({ post, setPosts }) => {
  let { id } = post;
  return (
    <>
      <button onClick={() => {}}>
        {" "}
        <FaEdit></FaEdit>{" "}
      </button>
      <button
        onClick={async () => {
          let request = await axios.delete(`http://localhost:8000/posts/${id}`);
          setPosts((posts) => posts.filter((post) => post.id !== id));
        }}
      >
        <FaTrashAlt></FaTrashAlt>
      </button>
    </>
  );
};

export default ModifyPost;
