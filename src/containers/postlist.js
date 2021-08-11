import ModifyPost from "../components/modify-post";
import Post from "../components/post";
const PostList = ({ posts, user }) => {
  return (
    <div>
      <h3> Recent posts! </h3>
      {posts.map((post) => (
        <div>
          {post.user.id === user.id && <ModifyPost />}
          <Post post={post} user={user} key={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
