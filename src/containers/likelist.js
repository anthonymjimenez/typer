import { Link } from "react-router-dom";

const LikeList = ({ postLikes, usersObject }) => {
  return postLikes.map((userId) => (
    <h6>
      <Link to={`user/${usersObject[userId].username}`}>
        {" "}
        User: {usersObject[userId].username}
      </Link>{" "}
    </h6>
  ));
};

export default LikeList;
